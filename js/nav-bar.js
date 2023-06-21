const nav = document.getElementById("nav-js");
const closeNav = document.querySelector(".open-nav");

function openNav() {
  nav.classList.toggle("open-aside");
  closeNav.classList.toggle("close-nav");
}
closeNav.addEventListener("click", openNav);

const selectPage = document.querySelector("#selectPage");
const link = document.querySelector(".links");

selectPage.addEventListener("click", function () {
  link.classList.toggle("link-show");
});
