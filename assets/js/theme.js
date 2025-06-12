document.addEventListener('DOMContentLoaded', () => {
  const lightThemeBtn = document.getElementById('theme-toggle-light');
  const darkThemeBtn = document.getElementById('theme-toggle-dark');

  if (lightThemeBtn && darkThemeBtn) {
    lightThemeBtn.addEventListener('click', () => {
      document.documentElement.classList.remove('dark');
      console.log('Light theme activated');
      localStorage.setItem('theme', 'light');
    });

    darkThemeBtn.addEventListener('click', () => {
      document.documentElement.classList.add('dark');
      console.log('Dark theme activated');
      localStorage.setItem('theme', 'dark');
    });
  }
});