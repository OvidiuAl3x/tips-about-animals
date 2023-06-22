import data from "./db.json" assert { type: "json" };

const { history, food, treats, bowls, bed, leashes, collars, toys } = data.dog;
const get = document.querySelector(".dog-history");
// get.innerHTML = history + food + treats + `<h1>${bed}</h1>`;
get.innerHTML = history;
