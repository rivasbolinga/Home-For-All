const mobileMenu = document.querySelector('.mobile-menu');
const btnOpenMenu = document.querySelector('.hamburger-menu');
const btnCloseMenu = document.querySelector('.btn-close-l');
const linkSection = document.querySelector('.links');

const openMenu = function () {
  mobileMenu.style.display = 'flex';
};

const closeMenu = function () {
  mobileMenu.style.display = 'none';
};

btnOpenMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);
linkSection.addEventListener('click', closeMenu);
