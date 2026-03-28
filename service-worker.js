/**
 * Rising Digital IA - Progressive Web App Service Worker
 * 
 * Stratégies de cache:
 * - Cache-first: Assets statiques (CSS, JS, images)
 * - Network-first: HTML et contenu dynamique
 * - Stale-while-revalidate: Ressources semi-dynamiques
 */

const CACHE_VERSION = 'v1.0.0';
const CACHE_NAME = `rising-digital-${CACHE_VERSION}`;
const OFFLINE_URL = '/offline.html';

// Assets critiques à mettre en cache au premier chargement
const CRITICAL_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap',
];

// Patterns pour différentes stratégies de cache
const CACHE_STRATEGIES = {
  // Cache-first: Pour les assets statiques (CSS, JS, images)
  cacheFirst: [
    /\.css$/,
    /\.js$/,
    /\.woff2?$/,
    /\.ttf$/,
    /\.eot$/,
    /\.svg$/,
    /\.(png|jpg|jpeg|gif|webp)$/,
    /d2xsxph8kpxj0f\.cloudfront\.net/,
  ],
  
  // Network-first: Pour HTML et contenu dynamique
  networkFirst: [
    /\.html$/,
    /^https?:\/\/(www\.)?msa37\.github\.io/,
  ],
  
  // Stale-while-revalidate: Pour les ressources semi-dynamiques
  staleWhileRevalidate: [
    /^https?:\/\/(fonts\.googleapis\.com|cloud\.umami\.is)/,
  ],
};

/**
 * Événement d'installation du service worker
 * Pré-cache les assets critiques
 */
self.addEventListener('install', (event) => {
  console.log('[SW] Installation du service worker');
  
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Mise en cache des assets critiques');
      return cache.addAll(CRITICAL_ASSETS).catch((error) => {
        console.warn('[SW] Erreur lors de la mise en cache des assets critiques:', error);
        // Continuer même si certains assets ne peuvent pas être mis en cache
        return Promise.resolve();
      });
    })
  );
  
  // Force l'activation immédiate
  self.skipWaiting();
});

/**
 * Événement d'activation du service worker
 * Nettoie les anciens caches
 */
self.addEventListener('activate', (event) => {
  console.log('[SW] Activation du service worker');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Suppression du cache ancien:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  // Prend le contrôle de tous les clients immédiatement
  self.clients.claim();
});

/**
 * Événement de récupération (fetch)
 * Applique les stratégies de cache appropriées
 */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Ignore les requêtes non-GET
  if (request.method !== 'GET') {
    return;
  }
  
  // Ignore les requêtes chrome-extension
  if (url.protocol === 'chrome-extension:') {
    return;
  }
  
  // Détermine la stratégie de cache à utiliser
  const strategy = getStrategy(url);
  
  if (strategy === 'cache-first') {
    event.respondWith(cacheFirstStrategy(request));
  } else if (strategy === 'network-first') {
    event.respondWith(networkFirstStrategy(request));
  } else if (strategy === 'stale-while-revalidate') {
    event.respondWith(staleWhileRevalidateStrategy(request));
  } else {
    event.respondWith(networkFirstStrategy(request));
  }
});

/**
 * Détermine la stratégie de cache appropriée pour une URL
 */
function getStrategy(url) {
  const urlString = url.toString();
  
  for (const pattern of CACHE_STRATEGIES.cacheFirst) {
    if (pattern.test(urlString)) {
      return 'cache-first';
    }
  }
  
  for (const pattern of CACHE_STRATEGIES.networkFirst) {
    if (pattern.test(urlString)) {
      return 'network-first';
    }
  }
  
  for (const pattern of CACHE_STRATEGIES.staleWhileRevalidate) {
    if (pattern.test(urlString)) {
      return 'stale-while-revalidate';
    }
  }
  
  return 'network-first';
}

/**
 * Stratégie Cache-First
 * Cherche d'abord dans le cache, puis sur le réseau
 */
async function cacheFirstStrategy(request) {
  try {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    
    if (cached) {
      console.log('[SW] Cache hit:', request.url);
      return cached;
    }
    
    console.log('[SW] Cache miss, fetching from network:', request.url);
    const response = await fetch(request);
    
    if (response.ok) {
      cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    console.error('[SW] Erreur cache-first:', error);
    return getOfflineResponse(request);
  }
}

/**
 * Stratégie Network-First
 * Cherche d'abord sur le réseau, puis dans le cache
 */
async function networkFirstStrategy(request) {
  try {
    console.log('[SW] Fetching from network:', request.url);
    const response = await fetch(request);
    
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    console.error('[SW] Erreur network-first:', error);
    
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    
    if (cached) {
      console.log('[SW] Utilisation du cache en fallback:', request.url);
      return cached;
    }
    
    return getOfflineResponse(request);
  }
}

/**
 * Stratégie Stale-While-Revalidate
 * Retourne le cache immédiatement et met à jour en arrière-plan
 */
async function staleWhileRevalidateStrategy(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  
  const fetchPromise = fetch(request).then((response) => {
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch((error) => {
    console.error('[SW] Erreur stale-while-revalidate:', error);
    return cached || getOfflineResponse(request);
  });
  
  return cached || fetchPromise;
}

/**
 * Retourne la page offline ou une réponse d'erreur
 */
async function getOfflineResponse(request) {
  const cache = await caches.open(CACHE_NAME);
  
  // Pour les requêtes HTML, retourne la page offline
  if (request.headers.get('accept')?.includes('text/html')) {
    const offline = await cache.match(OFFLINE_URL);
    if (offline) {
      return offline;
    }
  }
  
  // Pour les images, retourne une image placeholder
  if (request.headers.get('accept')?.includes('image')) {
    return new Response(
      '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="#f0f0f0" width="200" height="200"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#999" font-family="sans-serif">Offline</text></svg>',
      {
        headers: { 'Content-Type': 'image/svg+xml' },
      }
    );
  }
  
  // Réponse d'erreur générique
  return new Response('Offline - Service unavailable', {
    status: 503,
    statusText: 'Service Unavailable',
  });
}

/**
 * Gestion des messages depuis le client
 */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.delete(CACHE_NAME).then(() => {
      console.log('[SW] Cache cleared');
      event.ports[0].postMessage({ success: true });
    });
  }
});

/**
 * Détection et notification de mise à jour
 */
self.addEventListener('controllerchange', () => {
  console.log('[SW] Nouveau service worker activé');
  
  // Notifie tous les clients qu'une mise à jour est disponible
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({
        type: 'SW_UPDATED',
        message: 'Une nouvelle version de l\'application est disponible. Veuillez rafraîchir.',
      });
    });
  });
});
