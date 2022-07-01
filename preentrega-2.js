// obtengo los datos del usuario
let user = localStorage.getItem('user');
let pass = localStorage.getItem('pass');

const form = document.getElementById("form");
const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");
const contForm = document.getElementById("contForm");
const saludo = document.getElementById("saludo");

const ocultar = () => {
  contForm.style.display = "none";
  saludo.innerHTML = `Hola ${user}`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  user = usuario.value;
  pass = contraseña.value;

  localStorage.setItem("user", usuario.value);
  localStorage.setItem("pass", contraseña.value);

  ocultar();
});

if (!!user && !!pass) {
  ocultar();
}

//OBTENGO LOS DATOS
const sueldo = document.getElementById("sueldo").value;
const propina = document.getElementById("propina").value;
const gasto = document.getElementById("gasto").value;
const formu = document.getElementById("formu");
const total = document.getElementById("total");
//RESUELVO
let ingresos = sueldo + propina;
let resultado = ingresos - gasto;
//MANDO AL HTML
formu.onsubmit = (e) => {
  e.preventDefault();
  total.innerHTML = `resultado: ${resultado}`;
};
