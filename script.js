const navSlide = () => {

    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav_navigation-ul");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    });
}

navSlide();

const formPrevet = () => {
    const btn = document.querySelector(".medias_contact");

    btn.addEventListener("submit", (e) => {
        e.preventDefault()
    })
}

formPrevet()