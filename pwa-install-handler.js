/**
 * PWA Installation Handler
 * Gère l'installation de l'application PWA avec un bouton personnalisé
 * et déclenche le prompt d'installation natif du navigateur
 */

class PWAInstallHandler {
  constructor() {
    this.deferredPrompt = null;
    this.installButton = null;
    this.isInstalled = false;
    
    // Initialiser le gestionnaire
    this.init();
  }

  /**
   * Initialiser le gestionnaire PWA
   */
  init() {
    // Vérifier si l'app est déjà installée
    this.checkIfInstalled();
    
    // Écouter l'événement beforeinstallprompt
    window.addEventListener('beforeinstallprompt', (e) => this.handleBeforeInstallPrompt(e));
    
    // Écouter l'événement appinstalled
    window.addEventListener('appinstalled', () => this.handleAppInstalled());
    
    // Écouter les changements de display-mode (détecte si l'app est en mode PWA)
    window.matchMedia('(display-mode: standalone)').addEventListener('change', (e) => {
      if (e.matches) {
        this.isInstalled = true;
        this.updateUI();
      }
    });
    
    // Créer et injecter le bouton d'installation
    this.createInstallButton();
    
    // Enregistrer le service worker
    this.registerServiceWorker();
  }

  /**
   * Vérifier si l'app est déjà installée
   */
  checkIfInstalled() {
    // Vérifier le display-mode
    if (window.matchMedia('(display-mode: standalone)').matches) {
      this.isInstalled = true;
    }
    
    // Vérifier si l'app a été lancée depuis l'écran d'accueil (iOS)
    if (window.navigator.standalone === true) {
      this.isInstalled = true;
    }
  }

  /**
   * Gérer l'événement beforeinstallprompt
   */
  handleBeforeInstallPrompt(e) {
    // Empêcher le mini-infobar par défaut
    e.preventDefault();
    
    // Stocker l'événement pour utilisation ultérieure
    this.deferredPrompt = e;
    
    // Afficher le bouton d'installation
    this.updateUI();
    
    console.log('[PWA] beforeinstallprompt déclenché - bouton d\'installation disponible');
  }

  /**
   * Gérer l'événement appinstalled
   */
  handleAppInstalled() {
    console.log('[PWA] Application installée avec succès');
    
    this.isInstalled = true;
    this.deferredPrompt = null;
    
    // Mettre à jour l'interface
    this.updateUI();
    
    // Notifier l'utilisateur
    this.showNotification('Succès', 'Rising Digital IA a été installée sur votre appareil !');
  }

  /**
   * Créer le bouton d'installation personnalisé
   */
  createInstallButton() {
    // Vérifier si le bouton existe déjà
    if (document.getElementById('pwa-install-button')) {
      this.installButton = document.getElementById('pwa-install-button');
      this.installButton.addEventListener('click', () => this.promptInstall());
      return;
    }
    
    // Créer le bouton
    const button = document.createElement('button');
    button.id = 'pwa-install-button';
    button.className = 'pwa-install-button';
    button.innerHTML = `
      <svg class="pwa-install-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      <span class="pwa-install-text">Installer l'app</span>
    `;
    
    button.addEventListener('click', () => this.promptInstall());
    
    // Ajouter des styles
    this.injectStyles();
    
    // Injecter le bouton dans la page
    // Chercher un conteneur approprié (navbar, header, etc.)
    const navbar = document.querySelector('nav') || 
                   document.querySelector('header') || 
                   document.querySelector('[role="navigation"]') ||
                   document.body;
    
    if (navbar && navbar.querySelector('nav')) {
      // Ajouter avant le dernier élément de la navbar
      navbar.querySelector('nav').appendChild(button);
    } else if (navbar) {
      navbar.appendChild(button);
    }
    
    this.installButton = button;
    this.updateUI();
  }

  /**
   * Injecter les styles CSS pour le bouton
   */
  injectStyles() {
    if (document.getElementById('pwa-install-styles')) {
      return; // Les styles sont déjà injectés
    }
    
    const style = document.createElement('style');
    style.id = 'pwa-install-styles';
    style.textContent = `
      .pwa-install-button {
        display: none;
        align-items: center;
        gap: 8px;
        padding: 10px 16px;
        background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(30, 58, 138, 0.3);
        font-family: 'Poppins', 'Open Sans', sans-serif;
        margin: 0 8px;
      }
      
      .pwa-install-button:hover {
        background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
        box-shadow: 0 6px 16px rgba(30, 58, 138, 0.4);
        transform: translateY(-2px);
      }
      
      .pwa-install-button:active {
        transform: translateY(0);
        box-shadow: 0 2px 8px rgba(30, 58, 138, 0.3);
      }
      
      .pwa-install-button.visible {
        display: flex;
      }
      
      .pwa-install-button.hidden {
        display: none;
      }
      
      .pwa-install-icon {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
      }
      
      .pwa-install-text {
        white-space: nowrap;
      }
      
      /* Responsive */
      @media (max-width: 768px) {
        .pwa-install-button {
          padding: 8px 12px;
          font-size: 13px;
          margin: 0 4px;
        }
        
        .pwa-install-text {
          display: none;
        }
        
        .pwa-install-button.visible {
          display: flex;
        }
      }
      
      /* Animation d'apparition */
      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .pwa-install-button.visible {
        animation: slideIn 0.3s ease;
      }
    `;
    
    document.head.appendChild(style);
  }

  /**
   * Mettre à jour l'interface en fonction de l'état
   */
  updateUI() {
    if (!this.installButton) return;
    
    if (this.isInstalled) {
      // L'app est installée, masquer le bouton
      this.installButton.classList.remove('visible');
      this.installButton.classList.add('hidden');
    } else if (this.deferredPrompt) {
      // Le prompt est disponible, afficher le bouton
      this.installButton.classList.add('visible');
      this.installButton.classList.remove('hidden');
    } else {
      // Pas de prompt disponible
      this.installButton.classList.remove('visible');
      this.installButton.classList.add('hidden');
    }
  }

  /**
   * Déclencher le prompt d'installation
   */
  async promptInstall() {
    if (!this.deferredPrompt) {
      console.warn('[PWA] Le prompt d\'installation n\'est pas disponible');
      return;
    }
    
    try {
      // Afficher le prompt
      this.deferredPrompt.prompt();
      
      // Attendre la réponse de l'utilisateur
      const { outcome } = await this.deferredPrompt.userChoice;
      
      console.log(`[PWA] Choix de l'utilisateur: ${outcome}`);
      
      if (outcome === 'accepted') {
        this.showNotification('Installation', 'Merci d\'avoir installé Rising Digital IA !');
      }
      
      // Réinitialiser le deferredPrompt
      this.deferredPrompt = null;
      this.updateUI();
      
    } catch (error) {
      console.error('[PWA] Erreur lors de l\'installation:', error);
    }
  }

  /**
   * Enregistrer le service worker
   */
  async registerServiceWorker() {
    if (!('serviceWorker' in navigator)) {
      console.warn('[PWA] Service Workers non supportés');
      return;
    }
    
    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js', {
        scope: '/',
      });
      
      console.log('[PWA] Service Worker enregistré:', registration);
      
      // Écouter les mises à jour
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // Une nouvelle version est disponible
            this.showUpdateNotification();
          }
        });
      });
      
    } catch (error) {
      console.error('[PWA] Erreur lors de l\'enregistrement du Service Worker:', error);
    }
  }

  /**
   * Afficher une notification de mise à jour
   */
  showUpdateNotification() {
    const message = 'Une nouvelle version de Rising Digital IA est disponible. Rafraîchissez la page pour mettre à jour.';
    
    // Utiliser l'API Notification si disponible
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Mise à jour disponible', {
        body: message,
        icon: '/icon-192.png',
        badge: '/icon-192.png',
        tag: 'update-notification',
      });
    }
    
    // Afficher aussi dans la console
    console.log('[PWA] Mise à jour disponible');
  }

  /**
   * Afficher une notification
   */
  showNotification(title, message) {
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        new Notification(title, {
          body: message,
          icon: '/icon-192.png',
          badge: '/icon-192.png',
        });
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            new Notification(title, {
              body: message,
              icon: '/icon-192.png',
              badge: '/icon-192.png',
            });
          }
        });
      }
    }
  }

  /**
   * Demander la permission pour les notifications
   */
  async requestNotificationPermission() {
    if (!('Notification' in window)) {
      console.warn('[PWA] Notifications non supportées');
      return false;
    }
    
    if (Notification.permission === 'granted') {
      return true;
    }
    
    if (Notification.permission !== 'denied') {
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    }
    
    return false;
  }

  /**
   * Obtenir l'état d'installation
   */
  getInstallationStatus() {
    return {
      isInstalled: this.isInstalled,
      isPromptAvailable: !!this.deferredPrompt,
      displayMode: window.matchMedia('(display-mode: standalone)').matches ? 'standalone' : 'browser',
    };
  }
}

// Initialiser le gestionnaire PWA au chargement du DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.pwaInstallHandler = new PWAInstallHandler();
  });
} else {
  window.pwaInstallHandler = new PWAInstallHandler();
}

// Exporter pour utilisation en module
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PWAInstallHandler;
}
