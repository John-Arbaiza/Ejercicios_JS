//Métodos más usados en Strings

// 1.length: Devuelve la longitud de la cadena (el número de caracteres).
let str = "Hola que tal soy un strign en js"
console.log(str.length);

//2.toLowerCase(): Convierte todos los caracteres de la cadena a minúsculas.
let mensaje = "HOLA QUE TAL"
console.log(mensaje.toLocaleLowerCase());

//3.toUpperCase(): Convierte todos los caracteres de la cadena a mayúsculas.
let mensaje2 = "Hola"
console.log(mensaje2.toLocaleUpperCase());

//4.trim(): Elimina los espacios en blanco de ambos extremos de la cadena (inicio y final).
let ejemplo = "   Hola Mundo   ";
console.log(ejemplo.trim()); // "Hola Mundo"

//5.charAt(): Devuelve el carácter en una posición específica (índice) de la cadena.
let ejemplo2 = "Hola Mundo";
console.log(ejemplo2.charAt(6)); // "o"

//6.substring():  Devuelve una nueva cadena que es una parte de la cadena original, entre dos índices especificados.
let mensaje3 = "¡Me convertiré en el rey de los piratas! (Kaizoku ou ni ore wa naru!)"
console.log(mensaje3.substring(39,69));

//7.slice(): permite índices negativos para contar desde el final de la cadena.
let mensaje4 = "Si debemos dudar de algo que sea del sentido común."
console.log(mensaje4.slice(-14));

//8.split(): Divide la cadena en un array de subcadenas, usando un delimitador como separador.
let ejemplo3 = "Hola Mundo desde JS";
let arr = ejemplo3.split(" "); // ["Hola", "Mundo"]
console.log(arr);

//9.indexOf(): Devuelve el primer índice donde se encuentra un valor.
let str2 = "Hola soy Juan y me gusta C#"
console.log(str2.indexOf("Juan"));

//10.lastIndexOf(): Su función es buscar la última ocurrencia de un valor (un carácter o una subcadena) dentro de una cadena, y devuelve 
// el índice de la última aparición de ese valor. 
let str3 = "Hola Mundo, Hola Universo";
console.log(str3.lastIndexOf("Hola"));

//11.match(): Realiza una búsqueda en la cadena y devuelve un array con las coincidencias encontradas, o null si no hay coincidencias.
let mensaje5 = "¡No estamos preguntando dónde está el tesoro escondido! Ni siquiera estamos preguntando si existe un tesoro! Todos salieron al mar, ¡arriesgando su vida para buscarlo!"
console.log(mensaje5.match(/estamos/g));

//12.includes(): Devuelve true si la cadena contiene el valor especificado, de lo contrario, devuelve false.
let str4 = "Hola Mundo";
console.log(str4.includes("Mundo")); // true
console.log(str4.includes("Adiós")); // false