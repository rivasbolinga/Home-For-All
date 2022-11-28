'use script'

const speakerBoxes = document.querySelector(".speaker-boxes");

//ARRAY of speakers:

const speakers = [
  {
    name: "Roberto Sanchez",
    image: "./assets/00b66d1ac26662551af857811ed6e9d3.png",
    picture: "./assets/depositphotos_178884984-stock-photo-teacher.jpg",
    profession: "Professor of Law at the University of London",
    resume: "Roberto is a lecturer in law, and has worked at Newcastle Law School, as well as London, since 2016.",
  },
  {
    image: "./assets/00b66d1ac26662551af857811ed6e9d3.png",
    picture: "./assets/depositphotos_31934889-stock-photo-smiling-teacher-standing-in-classroom.jpg",
    name: "Maura Elliot",
    profession: "Professor of Law at the University of Essex (UK)",
    resume: "Maura is a senior Lecturer at the School of Law of the University of Essex (UK)",
  },
  {
    name: "Carla Fernandez",
    image: "./assets/00b66d1ac26662551af857811ed6e9d3.png",
    picture: "./assets/depositphotos_39309469-stock-photo-beautiful-african-american-student-or.jpg",
    profession: "Professor of Law at the University of Madrid",
    resume: "Carla specializes in the rights of victims in international criminal law.",
  },
  {
    name: "Pietro Martinelli",
    image: "./assets/00b66d1ac26662551af857811ed6e9d3.png",
    picture: "./assets/depositphotos_88396462-stock-photo-successful-senior-man-sitting-at.jpg",
    profession: "Professor of Law at the University of Rome",
    resume: "Pietro is a Lecturer in law with an interest in human rights and animal rights.",
  },
  {
    image: "./assets/00b66d1ac26662551af857811ed6e9d3.png",
    picture: "./assets/depositphotos_411571758-stock-photo-portrait-senior-businesswoman-wearing-glasses.jpg",
    name: "Albian Schmith",
    profession: "Professor of Law at the University of Leicester",
    resume: "Albian drafted and co-ordinated a legal brief in support the Nonhuman Rights Project.",
  },
  {
    image: "./assets/00b66d1ac26662551af857811ed6e9d3.png",
    picture: "./assets/depositphotos_229020394-stock-photo-beautiful-female-teacher-formal-wear.jpg",
    name: "Rosa Maestu",
    profession: "Professor of Law at the University of Santiago de Chile",
    resume: "Rosa is a Senior Lecturer in the Law School of Santiago de Chile.",
  },
];

speakers.forEach((e,i)=> {
 
  const html = `
  <div class=speaker-box>
  <div class=images-box>
  <img class="speaker-img" src="${speakers[i].picture}">
  </div>
  <div class="speaker-details">
    <h5 class="full-name">${speakers[i].name}</h5>
    <p class="profession">${speakers[i].profession}</p>
    <div class="grey-line"></div>
    <p class="resume">${speakers[i].resume}</p>
    </div>
</div>`
speakerBoxes.insertAdjacentHTML('beforeend', html);
});