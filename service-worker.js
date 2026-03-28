/**
 * Rising Digital IA - Progressive Web App Service Worker (Updated)
 * 
 * Stratégies de cache:
 * - Cache-first: Assets statiques (CSS, JS, images)
 * - Network-first: HTML et contenu dynamique
 * - Stale-while-revalidate: Ressources semi-dynamiques
 */

const CACHE_VERSION = 'v1.0.1'; // Version incrémentée pour forcer la mise à jour
const CACHE_NAME = `rising-digital-${CACHE_VERSION}`;
const OFFLINE_URL = '/offline.html';

// Assets critiques à mettre en cache au premier chargement
const CRITICAL_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.json',
  '/pwa-install-handler.js', // Ajouté au cache critique
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap',
];

// Patterns pour différentes stratégies de cache
const CACHE_STRATEGIES = {
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
  networkFirst: [
    /\.html$/,
    /^https?:\/\/(www\.)?msa37\.github\.io/,
  ],
  staleWhileRevalidate: [
    /^https?:\/\/(fonts\.googleapis\.com|cloud\.umami\.is)/,
  ],
};

self.addEventListener('install', (event) => {
  console.log('[SW] Installation du service worker v1.0.1');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CRITICAL_ASSETS).catch((error) => {
        console.warn('[SW] Erreur lors de la mise en cache des assets critiques:', error);
        return Promise.resolve();
      });
    })
  );
  self.skipWaiting();
});

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
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.protocol === 'chrome-extension:') return;
  
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

function getStrategy(url) {
  const urlString = url.toString();
  for (const pattern of CACHE_STRATEGIES.cacheFirst) if (pattern.test(urlString)) return 'cache-first';
  for (const pattern of CACHE_STRATEGIES.networkFirst) if (pattern.test(urlString)) return 'network-first';
  for (const pattern of CACHE_STRATEGIES.staleWhileRevalidate) if (pattern.test(urlString)) return 'stale-while-revalidate';
  return 'network-first';
}

async function cacheFirstStrategy(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch (error) {
    return getOfflineResponse(request);
  }
}

async function networkFirstStrategy(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    return cached || getOfflineResponse(request);
  }
}

async function staleWhileRevalidateStrategy(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  const fetchPromise = fetch(request).then((response) => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => cached || getOfflineResponse(request));
  return cached || fetchPromise;
}

async function getOfflineResponse(request) {
  const cache = await caches.open(CACHE_NAME);
  if (request.headers.get('accept')?.includes('text/html')) {
    const offline = await cache.match(OFFLINE_URL);
    if (offline) return offline;
  }
  return new Response('Offline', { status: 503 });
}

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});
