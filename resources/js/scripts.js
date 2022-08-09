const formulario = document.getElementById("formulario");

var todasMisOperaciones;

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let datosFormulario = new FormData(formulario);
    let info = operacionObjeto(datosFormulario);
    if (validando(info)) {
        guardarJSON(info);
        agregarOperaciones(info);
        formulario.reset();
    } else { }
});

function validando(info) {
    let validar = true;
    if (!info["type"]) {
        alert("Por favor debe seleccionar un tipo de operación");
        validar = false;
    }
    if (!info["metod"]) {
        alert("Por favor selecciona un medio de pago");
        validar = false;
    }
    if (!info["amount"]) {
        alert("Por favor ingrese un importe");
        validar = false;
    } else if (info["amount"] < 0) {
        alert("No puedo ingresar un importe menor a 0");
        validar = false;
    }
    if (!info["spent"]) {
        alert("Por favor selecciona un método de transacción");
        validar = false;
    }
    if (!info["category"]) {
        alert("Por favor seleccione una de las opciones");
        validar = false;
    }
    if (!info["description"]) {
        alert("Por favor ingrese una descripción");
        validar = false;
    }
    return validar;
}

document.addEventListener("DOMContentLoaded", function (e) {
    fetch("http://localhost:3000/operaciones")
        .then(res => res.json())
        .then(data => { mostrarOperaciones(data); todasMisOperaciones = data; });
});

function mostrarOperaciones(recorrer) {
    recorrer.forEach(function (arrayElement) {
        agregarOperaciones(arrayElement);
    });
}

function obtenerOperacionesAPI() {
    const todasLasOperaciones = fetch("http://localhost:3000/operaciones");
    return todasLasOperaciones;
}

function indicarCodigo() {
    let ultimoCodigo = localStorage.getItem("ultimoCodigo") || "-1";
    let nuevoCodigo = JSON.parse(ultimoCodigo) + 1;
    localStorage.setItem("ultimoCodigo", JSON.stringify(nuevoCodigo));
    return nuevoCodigo;
}

function operacionObjeto(datosFormulario) {
    let type = datosFormulario.get("type");
    let metod = datosFormulario.get("metod");
    let amount = datosFormulario.get("amount");
    let spent = datosFormulario.get("spent");
    let category = datosFormulario.get("category");
    let description = datosFormulario.get("description");
    let codigo = indicarCodigo();
    return {
        type: type,
        metod: metod,
        amount: amount,
        spent: spent,
        category: category,
        description: description,
        codigo: codigo,
    };
}

function agregarOperaciones(info) {
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
        eliminarOperacion(codigo);
    });
}

function eliminarOperacion(codigo) {
    let recorrer = JSON.parse(localStorage.getItem("datos"));
    let recorrerLocal = recorrer.findIndex((element) => element.codigo == codigo);
    recorrer.splice(recorrerLocal, 1);
    let operacionJSON = JSON.stringify(recorrer);
    localStorage.setItem("datos", operacionJSON);
}

function guardarJSON(info) {
    fetch("http://localhost:3000/operaciones", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(info),
    })
}