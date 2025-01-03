//Listas

//Forma 1 de definir una lista
const lista = ["hola", true,undefined, null ];
console.log(lista);

console.log("-------------------------------------------")
//Forma 2
const lista2 = new Array("Python", "Java", "C#");
console.log(lista2);

console.log("-------------------------------------------")
//Forma 3
const lista3 = new Array(4);
lista3[0] = 1;
lista3[1] = 3;
lista3[2] = 4;
lista3[3] = 6;
console.log(lista3);

console.log("-------------------------------------------")
//Forma 4
const lista4 = [lista, lista2, lista3]
console.log(lista4);

//===================================================================
//Métodos empleados en las listas
//===================================================================

console.log("-------------------------------------------")
//Métodos para introducir nuevos valores en los arrays

//push agrega un nuevo valor al final de la lista
lista.push("nuevo valor")
console.log(lista)

//Unshift
lista2.unshift("Ruby")
console.log(lista2);

console.log("-------------------------------------------")
//Métodos para eliminar valores en los arrays

//pop() elimina el último elemento de un array.
let prueba = [1, 2, 3, 4, 5];
console.log(prueba);
prueba.pop(); // Elimina el último elemento (5)
console.log(prueba);

console.log();


//shift() elimina el primer elemento de un array.
let prueba2 = [1, 2, 3, 4, 5];
console.log(prueba2);
prueba2.shift();  // Elimina el primer elemento (1)
console.log(prueba2);


//splice() es uno de los más poderosos y versátiles para eliminar elementos de un array.
//splice(indice, cantidad)
const numbers = [1,2,3,4,5,6,7]
console.log(numbers);
numbers.splice(2,1) // Elimina 1 elemento en el índice 2
console.log(numbers);

console.log("-------------------------------------------")
//Métodos para actualizar valores 

//splice() permite modificar el contenido de una lista ademas eliminar y agregar elementos.
console.log(lista);
lista.splice(2, 1, 10); // Elimina 1 elemento en el índice 2 y lo reemplaza con 10
console.log(lista);

console.log();

//map() crea un nuevo arreglo aplicando una función a cada elemento de la lista.
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let nuevaLista =  numbers2.map(num => num * 2); // Multiplica cada elemento por 2
console.log(nuevaLista);
