const formulario = document.getElementById("transactionForm");

var todasLasTransacciones;

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  let datosFormulario = new FormData(formulario);
  let info = objeto(datosFormulario);
  if (validando(info)) {
    guardar(info);
    agregarDatos(info);
    formulario.reset();
  } else {
  }
});

function draw_category() {
  let allCategories = [
    "Alquiler",
    "Comida",
    "Diversion",
    "Antojo",
    "Gasto",
    "Transporte",
  ];
  for (let index = 0; index < allCategories.length; index++) {
    insertCategory(allCategories[index]);
  }
}

function insertCategory(categoryName) {
  const selectElement = document.getElementById("transactionCategory");
  let htmlToInsert = `<option> ${categoryName} </option>`;
  selectElement.insertAdjacentHTML("beforeend", htmlToInsert);
}

function validando(info) {
  let isValidForm = true;
  if (!info["transactionType"]) {
    alert("Tu transaction type no es valido, ponele algo");
    isValidForm = false;
  }
  if (!info["transactionDescription"]) {
    alert("Debes colocar algo en el transaction description");
    isValidForm = false;
  }

  if (!info["transactionAmount"]) {
    alert("Debes colocar un monto");
    isValidForm = false;
  } else if (info["transactionAmount"] < 0) {
    alert("No puedes poner numeros negativos");
    isValidForm = false;
  }
  if (!info["transactionCategory"]) {
    alert("Debes colocar algo en el transaction categori");
    isValidForm = false;
  }
  return isValidForm;
}

document.addEventListener("DOMContentLoaded", function (event) {
  draw_category();
  //Obtiene las transacciones desde el servidor
  fetch("http://localhost:3000/transactions")
    .then((res) => res.json())
    .then((data) => {
      mostrarEnPantallaArrayDeTransaccion(data);
      todasLasTransacciones = data;
    });
});

function mostrarEnPantallaArrayDeTransaccion(recorrer) {
  recorrer.forEach(function (arrayElement) {
    agregarDatos(arrayElement);
  });
}

function getTransactionsFromApi() {
  //Llama al backend
  //Obtene las transacciones
  //y guardalas en un array
  const allTransactions = fetch("http://localhost:3000/transactions");
  return allTransactions;
}

function getNewTransactionId() {
  let lastTransactionId = localStorage.getItem("lastTransactionId") || "-1";
  let newTransactionId = JSON.parse(lastTransactionId) + 1;
  localStorage.setItem("lastTransactionId", JSON.stringify(newTransactionId));
  return newTransactionId;
}

function objeto(datosFormulario) {
  let transactionType = datosFormulario.get("transactionType");
  let transactionDescription = datosFormulario.get("transactionDescription");
  let transactionAmount = datosFormulario.get("transactionAmount");
  let transactionCategory = datosFormulario.get("transactionCategory");
  let transactionId = getNewTransactionId();
  return {
    transactionType: transactionType,
    transactionDescription: transactionDescription,
    transactionAmount: transactionAmount,
    transactionCategory: transactionCategory,
    transactionId: transactionId,
  };
}

function agregarDatos(info) {
  let transactionTableRef = document.getElementById("transactionTable");

  let newTransactionRowRef = transactionTableRef.insertRow(-1);
  newTransactionRowRef.setAttribute("data-transaction-id",info["transactionId"]);

  let newTypeCellRef = newTransactionRowRef.insertCell(0);
  newTypeCellRef.textContent = info["transactionType"];

  newTypeCellRef = newTransactionRowRef.insertCell(1);
  newTypeCellRef.textContent = info["transactionDescription"];

  newTypeCellRef = newTransactionRowRef.insertCell(2);
  newTypeCellRef.textContent = info["transactionAmount"];

  newTypeCellRef = newTransactionRowRef.insertCell(3);
  newTypeCellRef.textContent = info["transactionCategory"];

  let newDeleteCell = newTransactionRowRef.insertCell(4);
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar";
  newDeleteCell.appendChild(deleteButton);

  deleteButton.addEventListener("click", (event) => {
    let transactionRow = event.target.parentNode.parentNode;
    let transactionId = transactionRow.getAttribute("data-transaction-id");
    transactionRow.remove();
    deshacer(transactionId);
  });
}

function deshacer(transactionId) {
  let recorrer = JSON.parse(localStorage.getItem("transactionData"));
  //Busco el indice / la poscicion de la transacccion que quiero eliminar
  let transactionIndexInArray = recorrer.findIndex(
    (element) => element.transactionId == transactionId
  );
  //Elimino el elemento de esa poscicion
  recorrer.splice(transactionIndexInArray, 1);
  let transactionArrayJSON = JSON.stringify(recorrer);
  localStorage.setItem("transactionData", transactionArrayJSON);
}

function guardar(info) {
  let myTransactionArray = JSON.parse(localStorage.getItem("transactionData")) || [];
  myTransactionArray.push(info);
  let transactionArrayJSON = JSON.stringify(myTransactionArray);
  localStorage.setItem("transactionData", transactionArrayJSON);
}