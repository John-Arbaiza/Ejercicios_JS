//Estrucuras de control

//If else

//Ejemplo 1
//Definimos una varianle
let number = 2;

//ahora a traves del if indicamos que verifique si el numero es igual al especificado
if (number == 2){
    // en caso de que si sea igual
    console.log("Si es igual");
    
}
else{
    // de no ser igual muestra el siguiente mensaje
    console.log("No son iguales");
}


//Ejemplo 2
//Tenemos dos variables las cuales son:
let saldo = 100;
let dinero = 300;

//A traves del if verificamos si el saldo es suficiiente para alguna accion a realizar
console.log("\n Comprando un articulo \n verificando el saldo:");
if (saldo < dinero){
    //si no hay suficiente saldo se muestra el mensaje siguiente
    console.log("Saldo insuficiente para realizar la compra")
}
else{
    //Si hay saldo suficiente re realiza la compra y muestra el mensaje
    console.log("Compra realizada con exito")
}

// else if

//Ejemplo 1
let notas = 6;

if(notas >= 8 && notas <= 10){
    console.log("Felicidades has pasado con honores");
}
else if(notas >= 6 && notas <= 8){
    console.log("Felicidades pasaste");
}
else if(notas >= 0 && notas <= 5){
    console.log("Has reprobado");
}else{
    console.log("La nota ingresada no es valida");
}

//Sentencia Switch

//Ejemplo 1
let opcion = 5;

switch(opcion){
    case 1:
        console.log("Opción 1");
        break;
    case 2:
        console.log("Opción 2");
        break;
    case 3: 
        console.log("Opción 3");
        break;
    case 4:
        console.log("Opción 4");
        break
    default:
        console.log("Opción no valida");
        break;    
}




