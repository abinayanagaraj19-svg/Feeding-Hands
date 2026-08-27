// ====== Mobile Navigation Toggle ======
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
}

// ====== Scroll Animation Activation ======
const scrollElements = document.querySelectorAll(".scroll-animation");

function elementInView(el, offset = 100) {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight - offset);
}

function displayScrollElement(el) {
  el.classList.add("active");
}

function handleScrollAnimation() {
  scrollElements.forEach((el) => {
    if (elementInView(el)) {
      displayScrollElement(el);
    }
  });
}

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

// ====== Basic Form Popup Handler ======
function setupFormPopup(formId, popupId) {
  const form = document.getElementById(formId);
  const popup = document.getElementById(popupId);
  const closePopup = document.getElementById("closePopup");

  if (form && popup) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      popup.classList.add("show");
      form.reset();
    });
  }

  if (closePopup && popup) {
    closePopup.addEventListener("click", () => {
      popup.classList.remove("show");
    });
  }
}

setupFormPopup("contactForm", "formPopup");
setupFormPopup("joinForm", "formPopup");
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Initial display
showSlide(currentSlide);

// Change slide every 3 seconds
setInterval(nextSlide, 3000);
