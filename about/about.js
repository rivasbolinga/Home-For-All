'use script'

//Open mobile menu

const mobileMenu = document.querySelector('.mobile-menu');
const btnOpenMenu = document.querySelector('.hamburger-menu');


const openMenu = function() {
  mobileMenu.style.display="flex";
}
btnOpenMenu.addEventListener('click', openMenu);

//Close mobile menu

const btnCloseMenu = document.querySelector('.btn-close-l');
const linkSection = document.querySelector('.links');

const closeMenu = function() {
  mobileMenu.style.display = "none";
}

btnCloseMenu.addEventListener("click", closeMenu);
linkSection.addEventListener('click', closeMenu);