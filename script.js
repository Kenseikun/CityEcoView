document.addEventListener("DOMContentLoaded", function () {
  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav_navigation-ul");

    // MENU BTNS TOGGLE MENU HAMBURGER BUTTON | START
    const btnWelcome = document.querySelector(".nav__btn__welcome");
    const btnFunc = document.querySelector(".nav__btn__func");
    const btnTeam = document.querySelector(".nav__btn__team");
    const btnContact = document.querySelector(".nav__btn__contact");

    btnWelcome.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    });

    btnFunc.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    });

    btnTeam.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    });

    btnContact.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    });

    // | END

    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    });
  };

  const navSticky = () => {
    const navigate = document.querySelector(".section_nav");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        navigate.classList.add("nav_sticky");
      } else {
        navigate.classList.remove("nav_sticky");
      }
    });
  };

  navSticky();
  navSlide();

  const main = document.querySelector(".main_container");
  const functionality = document.querySelector(".functionality");
  const example = document.querySelector(".example");
  const location = document.querySelector(".location");
  const locationImg = document.querySelector(".location_warsaw");
  const team = document.querySelector(".team");

  window.addEventListener("scroll", () => {
    const scrollValue = window.scrollY;
    const windowHeight = window.innerHeight;

    const mainFromTop = main.offsetTop;
    const mainHeight = main.offsetHeight;

    const funcionalityFromTop = functionality.offsetTop;

    const exampleFromTop = example.offsetTop;

    const locationFromTop = location.offsetTop;

    const teamFromTop = team.offsetTop;

    if (scrollValue > mainFromTop - windowHeight) {
      main.classList.add("animate_left");
    }

    if (scrollValue < 100) {
      main.classList.remove("animate_left");
    }

    if (scrollValue > funcionalityFromTop - windowHeight) {
      functionality.classList.add("animate_right");
    }

    if (scrollValue < 100) {
      functionality.classList.remove("animate_right");
    }

    if (scrollValue > exampleFromTop - windowHeight) {
      example.classList.add("animate_left");
    }

    if (scrollValue < 100) {
      example.classList.remove("animate_left");
    }

    if (scrollValue > locationFromTop - windowHeight) {
      location.classList.add("animate_right");
      locationImg.classList.add("animate_scale");
    }

    if (scrollValue < 100) {
      location.classList.remove("animate_right");
      locationImg.classList.remove("animate_scale");
    }

    if (scrollValue > teamFromTop - windowHeight) {
      team.classList.add("animate_scale");
    }

    if (scrollValue < 100) {
      team.classList.remove("animate_scale");
    }
  });
});
