let consigna = prompt("Deseas calcular el promedio por edad de tus alumnos?");
if (consigna == "si"){
    let cantAlumnos = Number(prompt("Cuantos alumnos hay"));
    let edadAlumnos;
    let suma = 0;
    for(i=1;i<=cantAlumnos;i++){
        edadAlumnos = Number(prompt(i + ". Edad?"));
    
        suma = suma + edadAlumnos;
    }  
    alert(`El promedio de edades de ${cantAlumnos} alumnos es: ${suma/cantAlumnos}`);
}