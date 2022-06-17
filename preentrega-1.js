// condicional

// bucles

// clase constructora de objetos

// array con objetos

// 2 metodos de array

// dividido en funciones

// interactuar con prompt / alert / console.log

// function names() {
//   let nombresList = [];
//   for (let i = 0; i <= 2; i++) {
//     let nombre = prompt("Ingresa tu nombre:");
//     nombresList.push(nombre);

//     console.log(nombresList);
//   }
// }
// names();

// class Persona {
//   constructor(nombre, apellido, edad) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//   }
//   hablar() {
//     console.log(`Hola ${this.nombre} ${this.apellido} ${this.edad}`);
//   }
// }

// const persona1 = new Persona(
//   prompt("nombre"),
//   prompt("apellido"),
//   prompt("edad")
// );
// persona1.hablar();
// const persona2 = new Persona(
//   prompt("nombre"),
//   prompt("apellido"),
//   prompt("edad")
// );
// persona2.hablar();

function info() {
  let pregunta = prompt("Desea agregar a alguien a lista de comparación?");
  if (pregunta === "si" || pregunta === "Si" || pregunta === "SI") {
    const datos = [
      {
        nombre: prompt("nombre?"),
        apellido: prompt("apellido?"),
        edad: Number(prompt("edad?")),
      },
      {
        nombre: prompt("nombre?"),
        apellido: prompt("apellido?"),
        edad: Number(prompt("edad?")),
      },
      {
        nombre: prompt("nombre?"),
        apellido: prompt("apellido?"),
        edad: Number(prompt("edad?")),
      },
    ];

    class Dato {
      constructor(dato) {
        this.nombre = dato.nombre;
        this.apellido = dato.apellido;
        this.edad = dato.edad;
      }

      aviso() {
        alert(
          `Has añadido a la lista a: (${this.nombre} ${this.apellido}, de edad: ${this.edad} años))`
        );
      }
    }
    let personas = [];
    let invertir = [];

    datos.forEach((dato) => {
      personas.push(new Dato(dato));
      invertir.unshift(new Dato(dato));
    });
    personas.forEach((lista) => {
      lista.aviso();
    });
    invertir.forEach((vuelta) => {
      vuelta.aviso();
    });

    console.log(datos);
    console.log(personas);
    console.log(invertir);
  }
}

info();

// let salir = "n";
//   let numeros = [];

//   while (salir == "n") {
//     let numero = prompt("ingresa un número");
//     if (numero != null) {
//       numeros.push(parseInt(numero));
//     }
//     let seguir = confirm("desea ingresar mas numeros");
//     if (!seguir) {
//       salir = "y";
//     }
//   }
