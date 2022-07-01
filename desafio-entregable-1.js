const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");


// Funciones:
const Dinero = () => {
  let cantDinero = num1.innerHTML;
  for (i = 1; i <= cantDinero; i++) {
    let aporte = Number(prompt(`Importe N° ${i}`));
    sumarIngresos = sumarIngresos + aporte;
  }
  alert(`Total ingreso ${sumarIngresos}`);
};

const Gastos = () => {
  let cantGastos = Number(prompt("Cuantas operaciones deseas hacer?"));
  for (i = 1; i <= cantGastos; i++) {
    let gasto = Number(prompt(`Gasto N° ${i}`));
    sumarGasto = sumarGasto + gasto;
  }
  alert(`total gasto ${sumarGasto}`);
};

const restar = (num1, num2) => {
  return Number(num1) - Number(num2);
};

const sumar = (num1, num2) => {
  return num1 + " " + num2;
};

// Variables:
let sumarGasto = 0;
let sumarIngresos = 0;
let opcion;

// Simulación:
alert("Bienvenidos a Info Ahorro");
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
info = sumar(nombre, apellido);
alert(`Hola, ${info} ¿Que operación deseas hacer?`);
do {
  opcion = Number(prompt(`1: Ingresar Dinero, 2: Ingresar Gasto, 3: Nada`));
  switch (opcion) {
    case 1: {
      Dinero();
      let resultado = restar(sumarIngresos, sumarGasto);
      alert(`Saldo actual ${resultado}`);
      break;
    }
    case 2: {
      Gastos();
      let resultado = restar(sumarIngresos, sumarGasto);
      alert(`Saldo actual ${resultado}`);
      break;
    }
    case 3: {
      alert("Adios!");
    }
  }
} while (opcion !== 3);
