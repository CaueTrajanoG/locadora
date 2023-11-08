//import { add, remove } from "./services/storage.js";
import storage from "./services/storage.js";

function adiciona() {
  //   const name = document.getElementById("nameField").value;
  //   const ano = document.getElementById("yearField").value;
  //   const fab = document.getElementById("FabField").value;
  //   console.log(name);
  //   console.log(ano);
  //   console.log(fab);
  //add(name, ano, fab);

  const car = {
    nome: "Virtus",
    marca: "wolkswagen",
    ano: 2023,
    preco: 200,
  };
  storage.create("produtos", car);
}

document.getElementById("addButton").onclick = adiciona;
//document.getElementById("deleteButton").onclick = remove;
