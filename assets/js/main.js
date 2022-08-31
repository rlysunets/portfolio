const arrow = document.querySelector(".intro_wrap_arrow");
const header = document.querySelector(".header");
const introHeight = document.querySelector(".intro").clientHeight;

window.addEventListener("scroll", () => {
    if(window.scrollY > introHeight) {
        header.classList.add("header-small")
    } else {
        header.classList.remove("header-small")
    }
})

arrow.addEventListener("click", () => {
    const screenHeight = window.innerHeight;
    const headerHeigh = header.clientHeight;
    window.scrollTo({top: screenHeight-headerHeigh, behavior: "smooth"});
}) 
// slider
const splide = new Splide( '.splide', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    breakpoints: {
        768: {
            perPage: 2,
        },
        480: {
            perPage: 1,
        },
    }
});

splide.mount();

// mobile-menu
const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-mobile");
const overlay = document.querySelector("#overlay");
const body = document.querySelector("body");
const menuLinks = document.querySelectorAll(".menu-mobile_link");

menuLinks.forEach(el => {
    el.addEventListener("click", toggleMenu);
})
burger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

function toggleMenu() {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
    overlay.classList.toggle("open");
    body.classList.toggle("hidden");
}