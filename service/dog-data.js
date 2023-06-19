import data from "./db.json" assert { type: "json" };

const dog = data.dog;
const get = document.getElementById("dog");
get.innerHTML += dog.history;
