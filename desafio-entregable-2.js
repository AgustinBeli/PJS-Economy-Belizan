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

// let tituloUno = document.getElementById("numero");
// tituloUno.innerHTML = "N°2!";

// let titulo = document.getElementById("desafio");
// titulo.innerHTML = "¡Desafio Entregable";

// AGREGO MI TITULO

const desafio = document.getElementById("desafio");
const numero = document.getElementById("numero");
const conjunto = document.getElementById("conjunto");
const titulo = document.getElementById("titulo");

conjunto.onsubmit = (e) => {
    e.preventDefault();
    titulo.innerHTML = `${desafio.value}${numero.value}`;
}


// FORMULARIO EJEMPLO

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const formu = document.getElementById("formu");
const presentacion = document.getElementById("presentacion");

formu.onsubmit = (e) => {
  e.preventDefault();
  presentacion.innerHTML = `Bienvenido ${nombre.value} ${apellido.value}`;
};
