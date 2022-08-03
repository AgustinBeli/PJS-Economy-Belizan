const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
    let datosFormulario = new FormData(formulario);
    let info = objeto(datosFormulario);
    guardar(info);
    agregarDatos(info);
    formulario.reset();
  
});

document.addEventListener("DOMContentLoaded", function (e) {
  let recorrer = JSON.parse(localStorage.getItem("datos"));
  recorrer.forEach(function (recorriendo) {
    agregarDatos(recorriendo)
  }
  )
});

function agregarCodigo() {
  let ultimoCodigo = localStorage.getItem("ultimoCodigo") || "-1";
  let nuevoCodigo = JSON.parse(ultimoCodigo) + 1;
  localStorage.setItem("ultimoCodigo", JSON.stringify(nuevoCodigo));
  return nuevoCodigo;
}

function objeto(datosFormulario) {
  let type = datosFormulario.get("type");
  let metod = datosFormulario.get("metod");
  let amount = datosFormulario.get("amount");
  let spent = datosFormulario.get("spent");
  let category = datosFormulario.get("category");
  let description = datosFormulario.get("description");
  let codigo = agregarCodigo();
  return {
    "type": type,
    "metod": metod,
    "amount": amount,
    "spent": spent,
    "category": category,
    "description": description,
    "codigo": codigo,
  };
}

function agregarDatos(info) {
  let historial = document.getElementById("historial");

  let nuevaFila = historial.insertRow(-1);
  nuevaFila.setAttribute("data-codigo", info["codigo"]);

  let nuevaCelda = nuevaFila.insertCell(0);
  nuevaCelda.textContent = info["type"];

  nuevaCelda = nuevaFila.insertCell(1);
  nuevaCelda.textContent = info["metod"];

  nuevaCelda = nuevaFila.insertCell(2);
  nuevaCelda.textContent = info["amount"];

  nuevaCelda = nuevaFila.insertCell(3);
  nuevaCelda.textContent = info["spent"];

  nuevaCelda = nuevaFila.insertCell(4);
  nuevaCelda.textContent = info["category"];

  nuevaCelda = nuevaFila.insertCell(5);
  nuevaCelda.textContent = info["description"];

  let eliminarCelda = nuevaFila.insertCell(6);
  let botonDeshacer = document.createElement("button");
  botonDeshacer.textContent = "❌";
  eliminarCelda.appendChild(botonDeshacer);

  botonDeshacer.addEventListener("click", (e) => {
    let celda = e.target.parentNode.parentNode;
    let codigo = celda.getAttribute("data-codigo");
    celda.remove();
    deshacer(codigo);
  });
}

function deshacer(codigo) {
  let recorrer = JSON.parse(localStorage.getItem("datos"));
  let recorrerLocal = recorrer.findIndex((element) => element.codigo == codigo
  );
  recorrer.splice(recorrerLocal, 1);
  let operacionJSON = JSON.stringify(recorrer);
  localStorage.setItem("datos", operacionJSON);
}

function guardar(info) {
  let operaciones = JSON.parse(localStorage.getItem("datos")) || [];
  operaciones.push(info);
  let operacionJSON = JSON.stringify(operaciones);
  localStorage.setItem("datos", operacionJSON);
}
