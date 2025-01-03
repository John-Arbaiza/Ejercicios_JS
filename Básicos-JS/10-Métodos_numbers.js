// Métodos de numbers

let a = 2;
let b = new Number(3);
let str = new String("Hola");

console.log(a);
console.log(b);
console.log(str);


//método valueOf(): se utiliza para obtener el valor primitivo de un objeto. 
console.log(b.valueOf());
console.log(str.valueOf());

//Convirtiendo string a valores númericos

// Number:  convierte la cadena a un número, tanto entero como flotante, dependiendo del valor.
let str2 = "123";
console.log(str2);
console.log(Number(str2));

//parseInt: convierte una cadena a un número entero.
let str3 = "123";
let num = parseInt(str3);
console.log(num);

//parseFloat: convierte una cadena a un número de punto flotante (decimal).
let str4 = "123.45";
let num2 = parseFloat(str4);
console.log(num2); // 123.45

//toFixed(): permite formatear a una cantidad específica de decimales
let numDecimal = 123.456789;
console.log(numDecimal.toFixed(2));
console.log(numDecimal.toFixed(4));

//isNaN() y isFinite()
//permiten verificar si un valor es NaN o si es un número finito
let invalidStr = "abc";
let validStr = "123";

console.log(isNaN(invalidStr));  // true (porque "abc" no es un número)
console.log(isNaN(validStr));    // false (porque "123" es un número)

console.log(isFinite(123));  // true
console.log(isFinite(Infinity));  // false
console.log(isFinite(NaN));