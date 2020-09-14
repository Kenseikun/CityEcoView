document.addEventListener('DOMContentLoaded', function () {

    const navSlide = () => {

        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav_navigation-ul");

        burger.addEventListener("click", () => {
            nav.classList.toggle("nav-active");
            burger.classList.toggle("toggle");
        });
    }

    const navSticky = () => {
        const navigate = document.querySelector(".section_nav");

        window.addEventListener("scroll", function () {
            if (window.scrollY > 100) {
                navigate.classList.add("nav_sticky");
            } else {
                navigate.classList.remove("nav_sticky");
            }
        });
    }
    navSticky()


    navSlide();

    const main = document.querySelector(".main_container");

    window.addEventListener("scroll", () => {
        if (window.scrollY > -20) {
            main.classList.add("animate_left");
        }
    });

});

