//====| Declaracion de varaibles en JS |====
//inicialmente tenemos a var, la cual es para ambito global
// A continuación var indica que desea declarar una variable y mensaje es el nombre de dicha variable.
var mensaje;

//Ahora tenemos a let que es para un ambito de bloque
let myVariable;

//====| Asignación de un valor |====
//Para almacenar un valor en una variable, usamos el operador de asignación (=) seguido del valor esperado:
myVariable = 123;

//Inicialización explícita
//La inicialización explícita se usa en lugar de una asignación si se desea que una variable contenga un valor de inicio.
let saludo = "Hola Mundo desde JavaScript";

//====| Cambio de variables |====
//A continuación cambios el valor antes definido a myVariable
myVariable = 321;

//====| Constantes |====
//La declaración y la inicialización de una constante siguen los mismos conceptos que una variable, salvo que usa la palabra clave const
const MY_VARIABLE = 123;

// Las constantes son similares a las variables, con dos excepciones:

// Deben tener un valor: Las constantes se deben inicializar o se producirá un error al ejecutar el código.
// La referencia no se puede cambiar: Si la referencia de una constante cambia después de inicializarse, se producirá un error al ejecutar el código.

//====| Mostrar datos por consola |=====
//Para mostrar datos por consola hacemos uso de console.log(Mensaje o variable a mostrar) 
console.log("Mensaje:");
console.log(saludo);