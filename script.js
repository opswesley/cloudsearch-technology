// Menu responsivo
const mobileMenu = document.getElementById('mobile-menu');
const menu = document.getElementById('menu');

mobileMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Animações ao rolar
document.querySelectorAll('section').forEach((section) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });

  observer.observe(section);
});