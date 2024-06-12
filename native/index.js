"use strict";

const mobileMenu = document.querySelector(".mobileMenu");
const closeBtn = document.querySelector(".mobileMenu__close");
const openBtn = document.querySelector(".header__menu");

openBtn.addEventListener("click", () => {
    mobileMenu.classList.add("mobileMenu_opened");
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("mobileMenu_opened");
});
