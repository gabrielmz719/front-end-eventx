// Menu bar 
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

// Active section with scroll 
let section = document.querySelectorAll('section'); 
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {

    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    
  section.forEach(sec => { 
   
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
        
      navLinks.forEach(links => { 
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
        
      });
    }
  }); 
};

// Search form

document.querySelector("#search-icon").onclick = () => {
    document.querySelector("#search-form").classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
    document.querySelector("#search-form").classList.remove("active");
}

// Swiper container Dishes
var swiper = new Swiper(".home-slide", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    loop: true,
}); 
  
// Swiper container Review
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
  loop: true,
  breakpoints: {
    0: {
            slidesPerView :1,        
    },
    640: {
      slidesPerView :2, 
    },
    768: {
      slidesPerView :2, 
    },
    1024: {
      slidesPerView :3, 
    },
    },
}); 
  

// loader part

function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
  setInterval(loader, 31);
}

window.onload = fadeOut;








'use strict';

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


// const navbar = document.querySelector("[data-navbar]");
// const navToggler = document.querySelector("[data-nav-toggler]");
// const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

navToggler.addEventListener("click", toggleNav);

const navClose = () => {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElements(navLinks, "click", navClose);


const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeEl = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeEl);


/*BOTOES HOVER*/

const buttons = document.querySelectorAll("[data-btn]");

const buttonHoverRipple = function (event) {
  this.style.setProperty("--top", `${event.offsetY}px`);
  this.style.setProperty("--left", `${event.offsetX}px`);
}

addEventOnElements(buttons, "mousemove", buttonHoverRipple);



/* ROLAGEM */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    const isElementInsideWindow = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1;

    if (isElementInsideWindow) {
      revealElements[i].classList.add("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);



/* CURSOR ABOIOLADO VER SE APROVA */


// const cursor = document.querySelector("[data-cursor]");
// const hoverElements = [...document.querySelectorAll("a"), ...document.querySelectorAll("button")];

// const cursorMove = function (event) {
//   cursor.style.top = `${event.clientY}px`;
//   cursor.style.left = `${event.clientX}px`;
// }

// window.addEventListener("mousemove", cursorMove);

// addEventOnElements(hoverElements, "mouseover", function () {
//   cursor.classList.add("hovered");
// });

// addEventOnElements(hoverElements, "mouseout", function () {
//   cursor.classList.remove("hovered");
// });