//====| Declaracion de varaibles en JS |====
//inicialmente tenemos a var, la cual es para ambito global
// A continuación var indica que se desea declarar una variable y mensaje es el nombre de dicha variable.
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

//==================================================================================================================================
//====| Tipos de variables en JS |====

//number 
let edad = 25;  // Número entero
let precio = 19.99;  // Número decimal

// string
let nombre = "Juan";
let saludo2 = 'Hola, ¿cómo estás?';

//Boolean
let esActivo = true;
let esMayorDeEdad = false;

//Undefined: Una variable que ha sido declarada pero no se le ha asignado valor
let noDefinido;
console.log(noDefinido);  // undefined

// Null: Un valor que indica la ausencia intencionada de cualquier valor o objeto.
let usuario = null;

//No confundir a estas dos ya que no son lo mismo

//===================================================================================================
// 'typeof' nos permite determinar el tipo de dato de una variable o expresión
console.log("\nDeterminando el tipo de dato de una variable con 'typeof' \n");
console.log(typeof saludo + "\n");
console.log(typeof myVariable + "\n");
console.log(typeof usuario);