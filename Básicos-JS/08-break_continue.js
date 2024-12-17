//Uso del break y del continue

//Ejemplo 1
//Definimos una lista de números 
let numbers = [1,2,3,4,5,6,7,8,9];

//Recorremos la lista por medio del for
for (let index = 0; index < numbers.length; index++) {
    
    //Usamos un if para que cuando llegue a 4 haga un continue
    if (numbers[index] === 4){
        // Salta esta iteración y continúa con la siguiente
        continue
    }
    
    //Indicamos a traves de una condicional que cuando llegue a 6 haga un break
    if (numbers[index] > 6) {
        // Termina el bucle
        break;
    }

    // Imprimimos el valor del número
    console.log(index);
}

//----------------------------------------------------------------------------------------

//Ejemplo 2
//En este ejemplo buscaremos un numero

//Definimos una nueva lista de numeros
let lis_number2 = [12, 45, 33, 19, 60, 85, 4, 20, 70, 99];

//definimos la varible con el numero a buscar
let valor = 45

//Definimos un for para iterear a traves del arreglo
for (let i = 0; i < lis_number2.length; i++) {
    
    // Si el número es menor que 20, lo ignoramos (usando el continue)
    if (lis_number2[i] < valor) {
        console.log(`Número ${lis_number2[i]} ignorado.`);
        continue; // Salta a la siguiente iteración del bucle
    }

    // Si encontramos el número objetivo, detenemos el bucle con break
    if (lis_number2[i] === valor) {
        console.log(`¡Número ${valor} encontrado en la posición ${i}!`);
        break; // Sale del bucle
    }

    // Si no es ni menor que 20 ni el número objetivo, mostramos la lista
    console.log(`Número ${lis_number2[i]}.`);
}
