function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Q&A animation

const spanReveal = document.querySelectorAll(".reveal-answer");
const closeReveal = document.querySelectorAll(".close-answer");
const hide = document.querySelectorAll(".hide-answer");

function reavealAnswer() {
  hide.forEach(function (e) {
    e.classList.toggle("hide-answer2");
  });
  closeReveal.forEach(function (e) {
    e.classList.toggle("close-answer");
  });
  spanReveal.forEach(function (e) {
    e.classList.toggle("close-answer");
  });
}

spanReveal.forEach(function (e) {
  e.addEventListener("click", reavealAnswer);
});
closeReveal.forEach(function (e) {
  e.addEventListener("click", reavealAnswer);
});
