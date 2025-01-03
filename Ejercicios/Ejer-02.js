/* Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13... */


//Definimos las variables a implementar 
let number1 = 0;
let number2 = 1;
let fibo = 0

//Definimos un ciclo for para que nos ayude con la  sucesión
for(let i = 0; i < 50; i++){

    fibo = number1 + number2; // Calculamos el siguiente número
    number1 = number2; // Actualizamos number1
    number2 = fibo; // Actualizamos number2
    console.log(number1)
}