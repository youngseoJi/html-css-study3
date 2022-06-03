"use strict";
// 스크롤링 시 navbar 변경
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar-dark");
  } else {
    navbar.classList.remove("navbar-dark");
  }
});

// navbar menu Click 해당 섹션 이동
const navbarMenu = document.querySelector(".navbar_menu");
navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  }
  scrollIntoView(link);
});

// "contact me button" Click
const contactBtn = document.querySelector(".home_contact");
contactBtn.addEventListener("click", (e) => {
  scrollIntoView("#contact");
});
// Home slowly fade to transparent
const home = document.querySelector(".home_container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  console.log(1 - window.scrollY / homeHeight);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//show "arrow up " button scrolling
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// Handle Click "arrow up" button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
