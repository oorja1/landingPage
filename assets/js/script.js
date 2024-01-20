const header = document.querySelector("header");
window.addEventListener("scroll",() => {
    header.classList.toggle("sticky",window.scrollY>0)
});
const headerMenu = document.querySelector(".header__menu"),
menuBtn = document.querySelector(".menu-btn"),
headerMenuItems = headerMenu.querySelectorAll("nav ul");

menuBtn.addEventListener("click",() => {
   headerMenu.classList.toggle("show") ;  
});