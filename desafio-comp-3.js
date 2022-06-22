console.log(document.body);

let span = document.getElementById("numero");

console.log(span);
console.log(span.innerHTML);
console.log(span.innerText);
span.innerText = "N°3";

// // otra opción

// let nombre = document.createElement("h1");
// let numero = document.createElement("h1");

// nombre.innerHTML = "¡Desafio Complementario";
// numero.innerHTML = "N°3!";
// document.body.append(nombre, numero);

// //

// let padre = document.getElementById("personas");

// const datos = [
//   {
//     nombre: prompt("nombre?"),
//     apellido: prompt("apellido?"),
//     edad: Number(prompt("edad?")),
//   },
//   {
//     nombre: prompt("nombre?"),
//     apellido: prompt("apellido?"),
//     edad: Number(prompt("edad?")),
//   },
//   {
//     nombre: prompt("nombre?"),
//     apellido: prompt("apellido?"),
//     edad: Number(prompt("edad?")),
//   },
// ];

// for (const dato of datos) {
//   let li = document.createElement("li");
//   li.innerHTML = dato;
//   padre.append(li);
// }

// //Obtenemos el nodo donde vamos a agregar los nuevos elementos
// let padre      = document.getElementById("personas");
// //Array con la información a agregar
// let personas   = ["HOMERO","MARGE", "BART", "LISA","MAGGIE"];
// //Iteramos el array con for...of
// for (const persona of personas) {
//     //Creamos un nodo <li> y agregamos al padre en cada ciclo
//     let li = document.createElement("li");
//     li.innerHTML = persona
//     padre.append(li);
// }

//
function info() {
let ul = document.getElementById("persona");

let nombre = prompt("nombre?");
let apellido = prompt("apellido?");
let edad = Number(prompt("edad?"));

let persona = [nombre, apellido, edad];
for (const personas of persona) {
  let li = document.createElement("li");
  li.innerHTML = personas;
  ul.append(li);
}
}

info()
