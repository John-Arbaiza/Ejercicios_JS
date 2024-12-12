//Listas

//Forma 1 de definir una lidsta
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

