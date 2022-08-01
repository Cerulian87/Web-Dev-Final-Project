"use strict";

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// Show/hide FAQ, Change + to -

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector(".faq_icon i");

        if(icon.className === "uil uil-plus") {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
            
    })
})

// Nav menu hamburger button

const menu = document.querySelector(".nav__menu");
const menuButton = document.querySelector("#open_menu_btn");
const closeButton = document.querySelector("#close_menu_btn");

menuButton.addEventListener('click', () => {
    menu.style.display = "flex";
    closeButton.style.display = "inline-block";
    menuButton.style.display = "none";
})

// Nav menu X button

const closeNav = () => {
    menu.style.display = "none";
    closeButton.style.display = "none";
    menuButton.style.display = "inline-block";
}

closeButton.addEventListener('click', closeNav)