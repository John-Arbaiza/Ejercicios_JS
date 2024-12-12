//Objetos

//Formas de definir un objeto

//Forma1
const lenguajes = {
    top1: "C#",
    top2: "Java",
    top3: "Python",
    top4: "PHP"
}
console.log(lenguajes);

console.log("-------------------------------------------")
//Forma 2: Objeto dentro de un objeto
const auto = {
    color: "Rojo",
    year: 2000,
    marca : {
        op1: "Toyota",
        op2: "Nissan",
        op3: "KIA"
    }
}
console.log(auto);

//Para acceder a un elemento del objeto lo hacemos de la siguiente manera
console.log("Es un " + auto.marca.op3 + "de color " + auto.color);

//Para definir un nuevo atributo a nuestro objeto podemos hacerlo de la manera siguiente
auto.tipo = "Estandar";

//Ahora podemos ver como se agrega a nuestro objeto a un cuando no se definio dentro del objeto
//Con los demas atributos
console.log(auto);

console.log("-------------------------------------------")
//Edicion de los atributos del objeto
console.log("Antes de la edición: "+ auto.marca.op2);
auto.marca.op2 = "RAM";
console.log("Despues de la edición: "+ auto.marca.op2);
console.log("-------------------------------------------")

//--------------------------------------------------------------------------------------------------------------------------------
//fechas

//Para definir fechas lo hacemos de la siguiente manera
const now = new Date();
console.log(now);

//Definiendo a traves de los milisegundos
const fechaMili = new Date(10)
console.log(fechaMili);

//definiendo la fecha a traves de una cadena
const fecha_cadena = new Date("april 7 2024");
console.log(fecha_cadena);

//Definiendo fecha a partir de valores
const fechaValores = new Date(2024, 4, 22)
console.log(fechaValores);
//Los meses en las fechas es igual que en las listas osea se empieza en 0 

const dia = now.getDate();
const mes = now.getMonth() + 1;
const years = now.getFullYear();

console.log(dia, mes, years);