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
