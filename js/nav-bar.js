const nav = document.getElementById("nav-js");
const closeNav = document.querySelector(".open-nav");

function openNav() {
  nav.classList.toggle("open-aside");
  closeNav.classList.toggle("close-nav");
}
nav.addEventListener("click", openNav);
