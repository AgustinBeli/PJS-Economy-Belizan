let nombreUsuario;
let apellidoUsuario;
let edadUsuario;

const saludoEstudiantes = document.getElementById("saludoUsuario");
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const contFormulario = document.getElementById("contFormulario");
const contenido = document.getElementById("contenido");
// const formu = document.getElementById("formu");

const ocultar = () => {
  contFormulario.style.display = "none";
  contenido.innerHTML = `Hola ${nombreUsuario} ${apellidoUsuario}`;
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  nombreUsuario = nombre.value;
  apellidoUsuario = apellido.value;
  edadUsuario = edad.value;

  localStorage.setItem("nombreUsuario", nombre.value);
  localStorage.setItem("apellidoUsuario", apellido.value);
  localStorage.setItem("edadUsuario", edad.value);

  ocultar();
});

if (!!nombreUsuario && !!apellidoUsuario && !!edadUsuario) {
  ocultar();
}

// //OBTENGO LOS DATOS
// const sueldo = document.getElementById("sueldo").value;
// const propina = document.getElementById("propina").value;
// const gasto = document.getElementById("gasto").value;
// const formu = document.getElementById("formu");
// const total = document.getElementById("total");
// //RESUELVO
// let ingresos = sueldo + propina - gasto;
// let resultado = ingresos - gasto;
// //MANDO AL HTML
// formu.onsubmit = (e) => {
//   e.preventDefault();
//   total.innerHTML = `resultado: ${resultado}`;
// };
