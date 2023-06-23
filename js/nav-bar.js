const nav = document.getElementById("nav-js");
const closeNav = document.querySelector(".open-nav");

// open nav
function openNav() {
  nav.classList.toggle("open-aside");
}
closeNav.addEventListener("click", openNav);

// open dropdown from link to another page
const selectPage = document.querySelector("#selectPage");
const link = document.querySelector(".links");

selectPage.addEventListener("click", function () {
  link.classList.toggle("link-show");
});

// automatic close nav when pressed on link
const selectClose = document.querySelectorAll(".select");

selectClose.forEach(function (e) {
  e.addEventListener("click", function () {
    nav.classList.remove("open-aside");
  });
});
