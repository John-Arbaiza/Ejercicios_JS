//Ejercicio 1

//const de prompt para poder pedir los datos por medio de consola
const prompt = require("prompt-sync")();

//Funcion encargada de verificar el menor, mayor y numero del centro
function numerosOrden(a,b,c){

   //condicionales encargada de verificar
   if (a > b && a > c) {
    console.log(`El número mayor es: ${a}`);
    if (b > c) {
        console.log(`El número menor es: ${c}`);
        console.log(`El número del centro es: ${b}`);
    } 
    else {
        console.log(`El número menor es: ${b}`);
        console.log(`El número del centro es: ${c}`);
    }
 }
else if (b > a && b > c) {
    console.log(`El número mayor es: ${b}`);
    if (a > c) {
        console.log(`El número menor es: ${c}`);
        console.log(`El número del centro es: ${a}`);
    } else {
        console.log(`El número menor es: ${a}`);
        console.log(`El número del centro es: ${c}`);
    }
 }

else if (c > a && c > b) {
    console.log(`El número mayor es: ${c}`);
    if (a > b) {
        console.log(`El número menor es: ${b}`);
        console.log(`El número del centro es: ${a}`);
    } else {
        console.log(`El número menor es: ${a}`);
        console.log(`El número del centro es: ${b}`);
    }
 }
}

//Pidiendo el ingreso de los números
console.log("==========================================");
console.log("Bienvenido por favor ingrese tres números\n");
let a = prompt("Primer número:");
let b = prompt("Segundo número:");
let c = prompt("Tercer número:");
console.log("==========================================");
console.log("\tRESULTADO\n");

//Llamando a la funcion y pasandole los parametros
numerosOrden(a,b,c);