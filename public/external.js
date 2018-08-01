document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const navbarBurgers = document.querySelector('.navbar-burger');
  const navbarMenu = document.querySelector('.navbar-menu');

  navbarBurgers.addEventListener('click', () => {
    navbarBurgers.classList.toggle('is-active');
    navbarMenu.classList.toggle('is-active');
  });

});
