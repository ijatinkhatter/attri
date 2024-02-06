// swiper js section 3

const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });


// nav bar

const toggleButton = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () =>{
  navLinks.classList.toggle('active');
});

const homeBtn = document.getElementById('home-btn');
homeBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const aboutBtn = document.getElementById('about-btn');
aboutBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const destinationBtn = document.getElementById('destination-btn');
destinationBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const servicesBtn = document.getElementById('services-btn');
servicesBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const contactBtn = document.getElementById('contact-btn');
contactBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});