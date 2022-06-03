let cantAlumnos = Number(prompt("Cuantos alumnos hay"));
let edadAlumnos;
let suma = 0;
let i;

let consigna = prompt("Deseas calcular el promedio por edad de tus alumnos?")
if (consigna == "si"){
    for(i=1;i<=cantAlumnos;i++){
        edadAlumnos = Number(prompt(i + ". Edad?"));
    
        suma = suma + edadAlumnos;
    }  
}

console.log(`El promedio de edades de ${cantAlumnos} alumnos es: ${suma/cantAlumnos}`);