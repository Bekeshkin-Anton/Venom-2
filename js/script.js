const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-menu');
const closeMenu = document.querySelector('.menu-close');

menuButton.addEventListener('click', () => {
  menu.classList.add('is-active');
  closeMenu.classList.add('is-active');
})
closeMenu.addEventListener('click', () => {
  menu.classList.remove('is-active');
  closeMenu.classList.remove('is-active');
})