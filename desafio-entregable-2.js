// class Mostrar {
//     constructor () {

//     }
//     toggleView() {
//         nombre.classList.toggle('mostrar')
//     }
// }

// const mostrando = () => {

// }

// TITULO

let tituloUno = document.getElementById("numero");
tituloUno.innerHTML = "N°2!";

let titulo = document.getElementById("desafio");
titulo.innerHTML = "¡Desafio Entregable";

// FORMULARIO

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const formu = document.getElementById("formu");
const dato1 = document.getElementById("dato1");
const dato2 = document.getElementById("dato2");
const dato3 = document.getElementById("dato2");
const presentacion = document.getElementById("presentacion");

nombre.addEventListener("input", (e) => {
  dato1.innerHTML = e.target.value;
});
apellido.addEventListener("input", (e) => {
  dato2.innerHTML = e.target.value;
});
edad.addEventListener("input", (e) => {
  dato3.innerHTML = e.target.value;
});

formu.onsubmit = (e) => {
    e.preventDefault ();
    console.log(nombre.value)
    console.log(apellido.value)
    presentacion = `Bienvenido ${nombre.value} ${apellido.value}`;
}