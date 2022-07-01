// localStorage.setItem('bienvenida','Hola Agus');


// const bienvenida = localStorage.getItem('bienvenida');


// const saludoEstudiantes = document.getElementById("saludoUsuario");
// saludoEstudiantes.innerHTML = bienvenida;









//OBTENGO LOS DATOS
const sueldo = document.getElementById("sueldo").value;
const propina = document.getElementById("propina").value;
const gasto = document.getElementById("gasto").value;
const formu = document.getElementById("formu");
const total = document.getElementById("total");
//RESUELVO
let ingresos = sueldo + propina - gasto;
let resultado = ingresos - gasto;
//MANDO AL HTML
formu.onsubmit = (e) => {
  e.preventDefault();
  total.innerHTML = `resultado: ${resultado}`;
};