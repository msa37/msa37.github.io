/**
 * PWA Installation & Notification Handler v2
 * Gère l'installation native et les notifications push
 */

class PWAHandler {
  constructor() {
    this.deferredPrompt = null;
    this.installButton = null;
    this.isInstalled = false;
    this.init();
  }

  init() {
    this.checkIfInstalled();
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.updateUI();
      console.log('[PWA] Ready for native installation');
    });

    window.addEventListener('appinstalled', () => {
      this.isInstalled = true;
      this.deferredPrompt = null;
      this.updateUI();
      this.showNotification('Installation réussie', 'Rising Digital IA est maintenant sur votre écran d\'accueil !');
    });

    this.createInstallButton();
    this.registerServiceWorker();
  }

  checkIfInstalled() {
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
      this.isInstalled = true;
    }
  }

  createInstallButton() {
    if (document.getElementById('pwa-install-button')) {
      this.installButton = document.getElementById('pwa-install-button');
    } else {
      const btn = document.createElement('button');
      btn.id = 'pwa-install-button';
      btn.className = 'pwa-install-button';
      btn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
        </svg>
        <span>Installer l'application</span>
      `;
      this.injectStyles();
      document.body.appendChild(btn);
      this.installButton = btn;
    }
    this.installButton.onclick = () => this.promptInstall();
    this.updateUI();
  }

  injectStyles() {
    if (document.getElementById('pwa-styles')) return;
    const style = document.createElement('style');
    style.id = 'pwa-styles';
    style.textContent = `
      .pwa-install-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: none;
        align-items: center;
        gap: 10px;
        padding: 12px 20px;
        background: #1e3a8a;
        color: white;
        border: none;
        border-radius: 50px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        cursor: pointer;
        z-index: 9999;
        font-family: sans-serif;
        font-weight: bold;
        transition: transform 0.2s;
      }
      .pwa-install-button:hover { transform: scale(1.05); }
      .pwa-install-button.visible { display: flex; }
    `;
    document.head.appendChild(style);
  }

  updateUI() {
    if (this.installButton) {
      if (this.deferredPrompt && !this.isInstalled) {
        this.installButton.classList.add('visible');
      } else {
        this.installButton.classList.remove('visible');
      }
    }
  }

  async promptInstall() {
    if (!this.deferredPrompt) return;
    this.deferredPrompt.prompt();
    const { outcome } = await this.deferredPrompt.userChoice;
    console.log(`[PWA] User choice: ${outcome}`);
    this.deferredPrompt = null;
    this.updateUI();
  }

  async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        const reg = await navigator.serviceWorker.register('/service-worker.js');
        console.log('[PWA] SW registered:', reg);
        this.requestNotificationPermission();
      } catch (e) {
        console.error('[PWA] SW registration failed:', e);
      }
    }
  }

  async requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        this.showNotification('Notifications activées', 'Vous recevrez désormais les mises à jour de Rising Digital IA.');
      }
    }
  }

  showNotification(title, body) {
    if ('Notification' in window && Notification.permission === 'granted') {
      navigator.serviceWorker.ready.then(reg => {
        reg.showNotification(title, {
          body,
          icon: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663487005273/YKrbBnkYDUxTTkG6pnaD9h/icon-192-QkRECh7uAw5BZuDnHFkpjR.webp',
          badge: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663487005273/YKrbBnkYDUxTTkG6pnaD9h/icon-192-QkRECh7uAw5BZuDnHFkpjR.webp'
        });
      });
    }
  }
}

window.pwaHandler = new PWAHandler();
