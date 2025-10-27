// Select elements
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Toggle menu visibility
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navMenu.classList.toggle('open');
});
