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

// navbar menu 클릭 시 해당 섹션 이동
const navbarMenu = document.querySelector(".navbar_menu");
navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  }

  console.log(e.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
});
