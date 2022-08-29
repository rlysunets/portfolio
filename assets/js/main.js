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

const splide = new Splide( '.splide', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
});

splide.mount();