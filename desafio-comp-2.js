// const persona = {nombre: prompt ("Ingrese su nombre"), apellido: prompt ("Ingrese su apellido")};
// for (const textoCompleto in persona) {
//   console.log (textoCompleto);
// }
// console.log (persona)

// let nombre = prompt ("ingrese su nombre")
// let apellido = prompt ("ingrese su apellido")
// let edad = prompt ("ingrese su edad")
// let ciudad = prompt ("ingrese su ciudad")

// const persona = [nombre, apellido, edad, ciudad]
// for (const info of persona) {
//     alert (info);
// }

// const dato = [
//   prompt("Ingrese nombre"),
//   prompt("Ingrese apellido"),
//   Number(prompt("Ingrese edad")),
//   prompt("Ingrese sexo"),
// ];

// let pregunta = prompt("Desea agregar algún otro dato?");
// if (pregunta === "si" || "Si" || "SI") {
//   let agregarDato = prompt("Ingrese el dato");
//   dato.push(agregarDato);
// } else {
//     alert ("adios")
// }
// for (const info of dato) {
//   console.log(info);
// }

// let nombre = prompt("Ingrese su nombre");
// let apellido = prompt("Ingrese su apellido");
// let edad = Number(prompt("Ingrese su edad"));
// let sexo = prompt("Ingrese su sexo");
// let sueldo;
// let inversion;
// let propina;
// let gastosFijos;

// const data = [
//   { nombre: prompt("Ingrese su nombre"), apellido: prompt("Ingrese su apellido"), edad: Number(prompt("Ingrese su edad")), sexo: prompt("Ingrese su sexo") },
//   { nombre: prompt("Ingrese su nombre"), apellido: prompt("Ingrese su apellido"), edad: Number(prompt("Ingrese su edad")), sexo: prompt("Ingrese su sexo") },
//   { nombre: prompt("Ingrese su nombre"), apellido: prompt("Ingrese su apellido"), edad: Number(prompt("Ingrese su edad")), sexo: prompt("Ingrese su sexo") }
// ];

// class Persona {
//   constructor(persona) {
//     this.nombre = persona.nombre;
//     this.apellido = persona.apellido;
//     this.edad = persona.edad;
//     this.sexo = persona.sexo;
//   }
//   dato() {
//     alert(
//       `nombre: ${this.nombre}, apellido: ${this.apellidos}, edad: ${this.edad}, sexo ${this.sexo}`
//     );
//   }
// }
// class Persona2 {
//   constructor(persona) {
//     this.nombre = persona.nombre;
//     this.apellido = persona.apellido;
//     this.edad = persona.edad;
//     this.sexo = persona.sexo;
//   }
//   dato() {
//     alert(
//       `nombre: ${this.nombre}, apellido: ${this.apellidos}, edad: ${this.edad}, sexo ${this.sexo}`
//     );
//   }
// }

// console.log(data);
// console.log(data[0].nombre);

// let info = [];

// info.push(new Persona(data[0]));

// console.log(info);

// const usuario = new Persona(persona);

// console.log(usuario);
// alert(usuario);

// const canciones = [
//   { nombre: "w", genero: "r", artista: "g" },
//   { nombre: "h", genero: "r", artista: "r" },
//   { nombre: "i", genero: "p", artista: "q" },
// ];

// class Cancion {
//   constructor(nombre, genero, artista) {
//     this.nombre = nombre;
//     this.genero = genero;
//     this.artista = artista;
//   }
// }

// console.log(canciones);
// console.log(canciones[1].nombre);

// let listaReproduccion = [];

// listaReproduccion.push(new Cancion(canciones[0].nombre, canciones[0].genero, canciones[0].artista));

// console.log(listaReproduccion);

// listaReproduccion[0].reproducirCancion;

// const canciones = [
//   { nombre: "agustin", apellido: "belizan", edad: 24, sexo: "masculino" },
//   { nombre: "elias", apellido: "vera", edad: 18, sexo: "masculino" },
//   { nombre: "kenji", apellido: "matuoka", edad: 11, sexo: "masculino" },
// ];

// class Cancion {
//   constructor(cancion) {
//     this.nombre = cancion.nombre;
//     this.sexo = cancion.sexo;
//     this.apellido = cancion.apellido;
//   }
//     this.edad = cancion.edad;
//     console.log(
//       `nombre: ${this.nombre} apellido: ${this.apellido} edad: ${this.edad} sexo: ${this.sexo}`
//     );
//   }
// }

// console.log(canciones);
// console.log(canciones[1].nombre);

// let listaReproduccion = [];

// listaReproduccion.push(new Cancion(canciones[0]));

// console.log(listaReproduccion);

// listaReproduccion[0].reproducirCancion;

// const informacion = [
//   {
//     nombre: prompt("Ingrese su nombre"),
//     apellido: prompt("Ingrese su apellido"),
//     edad: Number(prompt("Ingrese su edad")),
//     sexo: prompt("Ingrese su sexo")
//   },
// {
//   nombre: prompt("Ingrese su nombre"),
//   apellido: prompt("Ingrese su apellido"),
//   edad: Number(prompt("Ingrese su edad")),
//   sexo: prompt("Ingrese su sexo")
// },
// {
//   nombre: prompt("Ingrese su nombre"),
//   apellido: prompt("Ingrese su apellido"),
//   edad: Number(prompt("Ingrese su edad")),
//   sexo: prompt("Ingrese su sexo")
// }
// ];

//   reproducirCancion() {
// console.log(informacion);

// let pregunta = prompt("desea agregar info?");
// if (pregunta === "si") {
//   informacion.unshift({
//     nombre: prompt("Ingrese su nombre"),
//     apellido: prompt("Ingrese su apellido"),
//     edad: Number(prompt("Ingrese su edad")),
//     sexo: prompt("Ingrese su sexo"),
//   });
//   console.log(informacion);
// }

// let personas = [
//   {
//     nombre: prompt("Ingrese su nombre"),
//     apellido: prompt("Ingrese su apellido"),
//     edad: Number(prompt("Ingrese su edad")),
//     sexo: prompt("Ingrese su sexo")
//   },
//   {
//     nombre: prompt("Ingrese su nombre"),
//     apellido: prompt("Ingrese su apellido"),
//     edad: Number(prompt("Ingrese su edad")),
//     sexo: prompt("Ingrese su sexo")
//   },
//   {
//     nombre: prompt("Ingrese su nombre"),
//     apellido: prompt("Ingrese su apellido"),
//     edad: Number(prompt("Ingrese su edad")),
//     sexo: prompt("Ingrese su sexo")
//   }
// ];

// let newPersona = {
//   nombre: prompt("Ingrese su nombre"),
//   apellido: prompt("Ingrese su apellido"),
//   edad: Number(prompt("Ingrese su edad")),
//   sexo: prompt("Ingrese su sexo")
// };

// personas.unshift(newPersona)

console.log("Lista de productos nueva PhoneArg");

let productos = [
  {
    nombre: prompt("ingrese nombre de producto"),
    precio: Number(prompt("ingrese un precio")),
  },
  {
    nombre: prompt("ingrese nombre de producto"),
    precio: Number(prompt("ingrese un precio")),
  },
  {
    nombre: prompt("ingrese nombre de producto"),
    precio: Number(prompt("ingrese un precio")),
  },
];
console.log (productos)

let productosNuevos = {
  nombre: prompt("ingrese nombre de producto"),
  precio: Number(prompt("ingrese un precio")),
}
productos.push(productosNuevos)

console.log(productos)
