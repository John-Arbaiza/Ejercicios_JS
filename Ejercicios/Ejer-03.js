/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

// Definimos un ciclo para verificar los números entre 1 y 100
for (let number = 2; number <= 100; number++) {
    let esPrimo = true; // Suponemos que el número es primo

    // Recorremos los números desde 2 hasta la raíz cuadrada de number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        // Si encontramos un divisor, no es primo
        if (number % i === 0) {
            esPrimo = false;
            break;
        }
    }

    // Si el número es primo, lo mostramos
    if (esPrimo) {
        console.log(number);
    }
}
