    `).join('');
  },
  updateActiveNav: function(route) {
    const navContainer = document.getElementById('app-navbar');
    if (!navContainer) return;
    const noNavRoutes = ['#/login', '#/register', '#/splash'];
    const isNoNav = noNavRoutes.some(r => route.startsWith(r)) || route === '' || route === '#/';
    
    if (isNoNav) {
      navContainer.style.display = 'none';
      return;
    } else {
      navContainer.style.display = 'flex';
    }
    const items = navContainer.querySelectorAll('.nav-item');
    items.forEach(item => {
      item.classList.remove('text-blue-500');
      item.classList.add('text-gray-400');
    });
    let activeId = '';
    if (route.startsWith('#/dashboard')) activeId = 'nav-dashboard';
    else if (route.startsWith('#/servis')) activeId = 'nav-servis';
    else if (route.startsWith('#/poin')) activeId = 'nav-poin';
    else if (route.startsWith('#/pengaturan')) activeId = 'nav-pengaturan';
    if (activeId) {
      const activeEl = document.getElementById(activeId);
      if (activeEl) {
        activeEl.classList.remove('text-gray-400');
        activeEl.classList.add('text-blue-500');
      }
    }
  }
};