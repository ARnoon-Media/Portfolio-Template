// Navbar Activ Links
const list = document.querySelectorAll("ul li a");
const listItem = Array.from(list);
const menu = document.querySelector("#icon-menu");
const menuX = document.querySelector("#icon-x");
const headerUl = document.querySelector("ul");
const header = document.querySelector(".header");
const section = document.querySelectorAll("section");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      listItem.forEach((links) => {
        links.classList.remove("active");
        if (sec && !sec.classList.contains("testimonial")) {
          let link = document.querySelector(`ul li a[href="#${id}"]`);
          if (link !== null) {
            link.classList.add("active");
          }
        }
      });
    }
  });
  // Sticky Header
  header.classList.toggle("sticky", window.scrollY > 100);

  // Menu Click
  headerUl.classList.add("active-ul");
  menuX.classList.add("icon-active");
  menu.classList.remove("icon-active");

  headerUl.classList.remove("active-ul");
  menuX.classList.remove("icon-active");
  menu.classList.add("icon-active");
};

// Menu Click
menu.addEventListener("click", () => {
  headerUl.classList.add("active-ul");
  menuX.classList.add("icon-active");
  menu.classList.remove("icon-active");
});

menuX.addEventListener("click", () => {
  headerUl.classList.remove("active-ul");
  menuX.classList.remove("icon-active");
  menu.classList.add("icon-active");
});

// Dark Mode
const darkModeMoon = document.querySelector(".icon-moon");
const darkModeSun = document.querySelector(".icon-sun");

darkModeMoon.addEventListener("click", () => {
  darkModeMoon.style.display = "none";
  darkModeSun.style.display = "block";
  document.querySelector("body").classList.add("darken-mode");
});

darkModeSun.addEventListener("click", () => {
  darkModeSun.style.display = "none";
  darkModeMoon.style.display = "block";
  document.querySelector("body").classList.remove("darken-mode");
});

// Typing Effect Writer
const paragraph = document.querySelector(".name");
const words = [
  "Mohammed Ariby",
  "Web Developer",
  "Photographer",
  "Graphic Designer",
  "UI UX Designer",
];
let i = 0;
let timer;

function typingEffect() {
  let word = words[i].split("");
  const loopTyping = function () {
    if (word.length > 0) {
      paragraph.textContent += word.shift();
    } else {
      deletingEffect();
      return;
    }
    timer = setTimeout(loopTyping, 350);
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[i].split("");
  const loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      paragraph.textContent = word.join("");
    } else {
      if (words.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      typingEffect();
      return;
    }
    timer = setTimeout(loopDeleting, 150);
  };
  loopDeleting();
}

typingEffect();

//Slider Component
const slider = function () {
  // Element slect
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider-btn-left");
  const btnRirht = document.querySelector(".slider-btn-right");
  const dotContainer = document.querySelector(".dots");

  // global variable
  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots-dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots-dot")
      .forEach((dot) => dot.classList.remove("dots-dot-active"));
    document
      .querySelector(`.dots-dot[data-slide='${slide}']`)
      .classList.add("dots-dot-active");
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) curSlide = 0;
    else curSlide++;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) curSlide = maxSlide - 1;
    else curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    createDots();
    activateDot(0);
    goToSlide(0);
  };
  init();

  // Event handler
  btnRirht.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots-dot")) {
      const slide = e.target.dataset.slide;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();

// Scroll Reveal

ScrollReveal({
  distance: "40px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img img, .services-boxes, .portfolio-boxes, .slider, .form",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(".home-content .name, .imag-about img", {
  origin: "left",
});
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {
  origin: "right",
});
