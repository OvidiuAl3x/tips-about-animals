import data from "./db.json" assert { type: "json" };

const { history, food, treats, bowls, bed, leashes, collars, toys } = data.dog;
const getHistory = document.querySelector(".dog-history");
const getFood = document.querySelectorAll(".dog-food");
// get.innerHTML = history + food + treats + `<h1>${bed}</h1>`;
getHistory.innerHTML += history;

getFood.forEach(function (element) {
  element.innerHTML += food;
});


