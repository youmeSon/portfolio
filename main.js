'use strict'

// Methods
function scrollIntoView(selector) { //우리가 정의한 함수
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: "smooth"}); // DOM 요소의 함수
};

// Make navbar transparent it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark')
  } else {
    navbar.classList.remove('navbar--dark')
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if(link == null) {
    return;
  } 
  scrollIntoView(link);
});

//Handle click on "contact me" button on home 
const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', () => {
  scrollIntoView('#contact');
});

//Make home slowly fade to trasparent as the window scrolls down
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
const homeContainer = document.querySelector('.home__container')
document.addEventListener('scroll', () => {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
  contactMe.style.opacity = 1 - window.scrollY / homeHeight;
});

// When mouse on 'contact me' button -> recover opacity
contactMe.addEventListener('mouseenter', () => {
  contactMe.style.opacity = 1;
});

// When mouse off 'contact me' button -> lose opacity again 
contactMe.addEventListener('mouseleave', () => {
  contactMe.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show 'Arrow u' button when scrolling down
const arrowBtn = document.querySelector('.arrow-btn');

document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight / 2) {
    arrowBtn.classList.add('visible');
  } else {
    arrowBtn.classList.remove('visible');
  }
});

// Handle click on the 'arrow up' button
arrowBtn.addEventListener('click', () => {
  scrollIntoView('#home');
});

// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if( filter == null) {
    return;
  }
  projectContainer.classList.add('anim-out');

  setTimeout(() => {
    projects.forEach((project) => {
      if( filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible')
      } else {
        project.classList.add('invisible')
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);

})

