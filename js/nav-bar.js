const nav = document.getElementById("nav-js");
const openNavButton = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");

// open nav
function openNav() {
  nav.classList.toggle("open-aside");
  openNavButton.classList.toggle("display-none");
}
openNavButton.addEventListener("click", openNav);
closeNav.addEventListener("click", openNav);

// open dropdown from link to another page
const selectPage = document.querySelector("#selectPage");
const link = document.querySelector(".links");

selectPage.addEventListener("click", function () {
  link.classList.toggle("link-show");
});

// automatic close nav when pressed on link
const menu = document.querySelectorAll(".select");

menu.forEach(function (e) {
  e.addEventListener("click", function () {
    nav.classList.remove("open-aside");
    openNavButton.classList.toggle("display-none");
  });
});

// active nav links on scroll
// we use const menu from above
let section = document.querySelectorAll("section");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");
    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("select-active");
        document
          .querySelector(".nav li a[href*=" + id + "]")
          .classList.add("select-active");
      });
    }
  });
};
