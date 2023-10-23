import { card } from "../components/card.js";

function filtra(carGrid, data) {
  console.log(data);
  console.log(carGrid);
  const carName = document.getElementById("search-input").value.toLowerCase();
  if (carName) {
    const dataFiltered = data.filter((car) =>
      car.nome.toLowerCase().includes(carName.toLowerCase())
    );
    carGrid.innerHTML = dataFiltered.map((car) => card(car)).join("");
  } else {
    carGrid.innerHTML = data.map((car) => card(car)).join("");
  }
}
export default { filtra };
