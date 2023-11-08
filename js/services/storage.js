import "../../css/style.css";
import api from "./api";

async function create(resource, data) {
  const { data: createdData } = await api.post(resource, data);
  return createdData?.[0];
}
async function read(resource) {

}
async function update(resource, data) {

}
async function remove(resource) {
  
}
export default { create, read, update, remove };

//Este arquivo está destinado a fazer o CRUD com o localStorage e apenas isso

// function add(nameArg, anoArg, fabArg) {
//   const key = "@cars";
//   const name = nameArg;
//   const ano = anoArg;
//   const fab = fabArg;
//   let newId = JSON.parse(localStorage.getItem("@idCar"));
//   let data = JSON.parse(localStorage.getItem("@cars"));
//   if (name != "" && ano != "" && fab != "") {
//     newId += 1;
//     const newCar = { id: newId, nome: name, ano: ano, fab: fab };
//     data.push(newCar);
//     localStorage.setItem("@cars", JSON.stringify(data));
//     localStorage.setItem("@idCar", newId);
//     limpa();
//   }
// }
// function remove() {
//   const id = document.getElementById("idField").value;
//   let data = JSON.parse(localStorage.getItem("@cars"));
//   for (let i = 0; i < data.length; i++) {
//     if (id == data[i].id) {
//       data.splice(i, 1);
//       localStorage.setItem("@cars", JSON.stringify(data));
//     }
//   }
//   limpa();
// }
// function limpa() {
//   document.getElementById("nameField").value = "";
//   document.getElementById("yearField").value = "";
//   document.getElementById("FabField").value = "";
//   document.getElementById("idField").value = "";
// }

// //ao carregar a pagina pela primeira vez ele
// //executa este script para popular o array
// //no local storage
// //caso já exista o array lá ele nao executa nada

// window.onload = function () {
//   if (localStorage.getItem("@idCar") == null) {
//     const id = 1;
//     localStorage.setItem("@idCar", JSON.stringify(id));
//   }
//   if (localStorage.getItem("@cars") == null) {
//     const cars = [
//       {
//         id: 2,
//         nome: "UNO",
//         ano: 2010,
//         fab: "FIAT",
//       },
//     ];
//     localStorage.setItem("@cars", JSON.stringify(cars));
//   }
// };
// //document.getElementById("addButton").onclick = add;
// //document.getElementById("deleteButton").onclick = remove;
// export { add, remove, limpa };
