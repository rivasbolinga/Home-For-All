'use strict';

const speakerBoxesContainer = document.querySelector('.speaker-boxes')
const desktopMediaQuery = window.matchMedia('(max-width: 767px)')
const btnMore = document.querySelector('.more-box')
const btnLess = document.querySelector('.less-box')
const mobileMenu = document.querySelector('.mobile-menu')
const btnOpenMenu = document.querySelector('.hamburger-menu')
const btnCloseMenu = document.querySelector('.btn-close-l')
const linkSection = document.querySelector('.links')

// ARRAY of speakers:

const speakers = [
  {
    name: 'Roberto Sanchez',
    image: './assets/00b66d1ac26662551af857811ed6e9d3.png',
    picture: './assets/depositphotos_178884984-stock-photo-teacher.jpg',
    profession: 'Professor of Law at the University of London',
    resume: 'Roberto is a lecturer in law, and has worked at Newcastle Law School, as well as London, since 2016.',
  },
  {
    image: './assets/00b66d1ac26662551af857811ed6e9d3.png',
    picture: './assets/depositphotos_31934889-stock-photo-smiling-teacher-standing-in-classroom.jpg',
    name: 'Maura Elliot',
    profession: 'Professor of Law at the University of Essex (UK)',
    resume: 'Maura is a senior Lecturer at the School of Law of the University of Essex (UK)',
  },
  {
    name: 'Carla Fernandez',
    image: './assets/00b66d1ac26662551af857811ed6e9d3.png',
    picture: './assets/depositphotos_39309469-stock-photo-beautiful-african-american-student-or.jpg',
    profession: 'Professor of Law at the University of Madrid',
    resume: 'Carla specializes in the rights of victims in international criminal law.',
  },
  {
    name: 'Pietro Martinelli',
    image: './assets/00b66d1ac26662551af857811ed6e9d3.png',
    picture: './assets/depositphotos_88396462-stock-photo-successful-senior-man-sitting-at.jpg',
    profession: 'Professor of Law at the University of Rome',
    resume: 'Pietro is a Lecturer in law with an interest in human rights and animal rights.',
  },
  {
    image: './assets/00b66d1ac26662551af857811ed6e9d3.png',
    picture: './assets/depositphotos_411571758-stock-photo-portrait-senior-businesswoman-wearing-glasses.jpg',
    name: 'Albian Schmith',
    profession: 'Professor of Law at the University of Leicester',
    resume: 'Albian drafted and co-ordinated a legal brief in support the Nonhuman Rights Project.',
  },
  {
    image: './assets/00b66d1ac26662551af857811ed6e9d3.png',
    picture: './assets/depositphotos_229020394-stock-photo-beautiful-female-teacher-formal-wear.jpg',
    name: 'Rosa Maestu',
    profession: 'Professor of Law at the University of Santiago de Chile',
    resume: 'Rosa is a Senior Lecturer in the Law School of Santiago de Chile.',
  },
];

function generateSpeakerBoxes(n) {
  let html = ''
  for (let i = 0; i < n; i++) {
    const speaker = speakers[i]
    html += `
      <div class="speaker-box">
        <div class="images-box">
          <img class="speaker-img" src="${speaker.picture}">
        </div>
        <div class="speaker-details">
          <h5 class="full-name">${speaker.name}</h5>
          <p class="profession">${speaker.profession}</p>
          <div class="grey-line"></div>
          <p class="resume">${speaker.resume}</p>
        </div>
      </div>`
  }
  speakerBoxesContainer.innerHTML = html
}

function showSpeakers() {
  if (desktopMediaQuery.matches) {
    generateSpeakerBoxes(2)
  } else {
    generateSpeakerBoxes(speakers.length)
  }
}

function showMore() {
  generateSpeakerBoxes(speakers.length)
  btnMore.style.display = 'none'
  btnLess.style.display = 'flex'
}

function showLess() {
  generateSpeakerBoxes(2)
  btnMore.style.display = 'flex'
  btnLess.style.display = 'none'
}

function openMenu() {
  mobileMenu.style.display = 'flex'
  btnOpenMenu.style.display = 'none'
}

function closeMenu() {
  mobileMenu.style.display = 'none'
  btnOpenMenu.style.display = 'block'
}

// Event Listeners
window.addEventListener('load', showSpeakers)
window.addEventListener('resize', showSpeakers)
btnMore.addEventListener('click', showMore)
btnLess.addEventListener('click', showLess)
btnOpenMenu.addEventListener('click', openMenu)
btnCloseMenu.addEventListener('click', closeMenu)
linkSection.addEventListener('click', closeMenu)