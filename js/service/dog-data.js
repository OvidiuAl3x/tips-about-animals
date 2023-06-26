import data from "./db.json" assert { type: "json" };

const { history, origins, breeds, working_dogs, living, leashes, collars, toys } = data.dog;
const getHistory = document.querySelector(".dog-history");
const getorigins = document.querySelectorAll(".dog-origins");
const getbreeds = document.querySelectorAll(".dog-breeds");
const getWorking = document.querySelectorAll(".working-dogs-p");
getHistory.innerHTML += history;

getorigins.forEach(function (element) {
  element.innerHTML += origins;
});
getbreeds.forEach(function (element) {
  element.innerHTML += breeds;
});
getWorking.forEach(function (element) {
  element.innerHTML += working_dogs;
});
