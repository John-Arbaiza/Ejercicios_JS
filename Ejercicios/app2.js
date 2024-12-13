/*Crea un programa que imprima por consola todos los números comprendidos
* entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3. 
*/

console.log("=========================================");
console.log("                Numbers                  ");
console.log("=========================================");

//Cuclo for para imrprmimir los numeros
for (i = 10; i <= 55; i++){
     // Verificamos si el número es par, no es 16 y no es múltiplo de 3
     if (i % 2 === 0 && i != 16 && i % 3 !== 0){
        console.log(i);
     }
}