import data from "./db.json" assert { type: "json" };

const {
  history,
  origins,
  breeds,
  working_dogs,
  living,
  leashes,
  collars,
  toys,
} = data.dog;
// const getHistory = document.querySelector(".dog-text");
const getorigins = document.querySelectorAll(".dog-text");
const getbreeds = document.querySelectorAll(".dog-breeds");
const getWorking = document.querySelectorAll(".working-dogs-p");
const getLiving = document.querySelectorAll(".dog-living");
// getHistory.innerHTML += history;

getorigins.forEach(function (element) {
  element.innerHTML += origins;
});
// getbreeds.forEach(function (element) {
//   element.innerHTML += breeds;
// });
// getWorking.forEach(function (element) {
//   element.innerHTML += working_dogs;
// });
// getLiving.forEach(function (element) {
//   element.innerHTML += living;
// });
