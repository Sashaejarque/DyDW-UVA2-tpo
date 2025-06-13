document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

     const themeToggleButtons = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');

  themeToggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      
      if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  });
});