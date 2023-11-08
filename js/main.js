import { card } from "./components/card.js";
import Filter from "./services/filter.js";


//populam a pagina inicial
const carGrid = document.querySelector(".carGrid");
const data = JSON.parse(localStorage.getItem("@cars"));
carGrid.innerHTML = data.map((car) => card(car)).join("");

//barra de pesquisa
document.getElementById("searchButton").addEventListener("click", (e) => {
  e.preventDefault();
  Filter.filtra(carGrid, data);
});
