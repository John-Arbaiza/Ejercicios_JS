// Concatenación de listas y más

const lista = ["Python", "Java", "C#"];
const lista2 = ["Flask", "Spring Boot", "ASP.NET"]
const lista3 = ["PHP", "Ruby"]

//concat() se utiliza para combinar dos o más arrays sin modificar los arrays originales.
let newList = lista.concat(lista2)
console.log(newList);

console.log();


//Usando el operador de propagación (...)
let resultado = [...lista, ...lista2, ...lista3];
console.log(resultado);

//===================================================================================
//obtener una lista a través de otra
//===================================================================================

//slice() devuelve una nueva lista que es una copia superficial de una porción del array original. 
let listaOriginal = [1, 2, 3, 4, 5];
let sublista = listaOriginal.slice(1, 4); // Desde el índice 1 hasta el índice 3 (el 4 no se incluye)

console.log(sublista);