import Swiper from "swiper";

const currentPage = document.querySelector("#currentPage");
const totalPages = document.querySelector("#totalPages");

const swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".controls__button_next",
        prevEl: ".controls__button_prev",
    },
});

currentPage.textContent = swiper.activeIndex + 1;
totalPages.textContent = swiper.slides.length;

swiper.on("slideChange", () => (currentPage.textContent = swiper.activeIndex + 1));