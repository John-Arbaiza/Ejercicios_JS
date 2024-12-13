//Bucle for

//Ejemplo para imprimir 20 numeros
console.log("Numeros del 1 al 20");
for (let i = 0; i <= 20; i++) {
    console.log(i); 
}

//Ejemplo 2
//En el siguiente ejemoplo recorreremos la lista por medio de un for
let lista  = [1,2,3,4,5,6,7,8,9]
for (let index = 0; index < lista.length; index++) {
   console.log(lista[index]);
}

//Ejemplo 3
//Uso de un forof
for (const element of lista) {
    console.log(element);
}

//ejemplo 4
//Uso de un forEach
lista.forEach(element => {
    console.log(element); 
});

//ejemplo 5
//uso del for in

//Definimos un objeto
let persona = {
    name: "Juan",
    lastName: "flores",
    age: 20
}

for (let datos in persona) {
    console.log(datos);
    console.log(persona);
}
