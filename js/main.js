import { card } from "./components/card.js";
import Filter from "./services/filter.js";

const carGrid = document.querySelector(".carGrid");

const data = JSON.parse(localStorage.getItem("@cars"));
console.log(data);

carGrid.innerHTML = data.map((car) => card(car)).join("");

document.getElementById("searchButton").addEventListener("click", (e) => {
  e.preventDefault();
  Filter.filtra(carGrid, data);
});
