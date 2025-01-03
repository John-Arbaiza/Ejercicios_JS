// Importar el módulo prompt-sync
const prompt = require("prompt-sync")();

//Definimos la variable a usar y pedimos el dato al usuario
let number = prompt("Ingrese la cantidad de números a imprimir: ");

//Definimos un for para mostrar los numeros segun lo pedido
for (let i = 0; i <= number; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
