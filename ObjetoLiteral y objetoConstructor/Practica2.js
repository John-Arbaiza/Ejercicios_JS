//Ejercicio 2

//const de prompt para poder pedir los datos por medio de consola
const prompt = require("prompt-sync")();

//Le preguntamos al usuario si desea crear el objeto
let confirmacion = prompt("¿Desea que se cree un objeto perro?: ");

//Verificando por medio de un condicional la desicion del usuario
if(confirmacion.toUpperCase() === "SI"){
    //Pequeño menu a mostrar
    console.log("====================================");
    console.log("\t        MENU");
    console.log("====================================");
    console.log("Elija el tipo de objeto a crear\n");
    console.log("1.Objeto literal");
    console.log("2.Objeto constructor");
    console.log("====================================");
    let opcion = prompt("->");
    opcion = parseInt(opcion);
    
   //Verificando la opcion ingresada
   switch(opcion){
    case 1:
    //Pidiendo al usuario que ingrese los datos del objeto
    console.log("por favor ingrese los datos que se piden a continuacion\n");
    const nombre = prompt("Ingrese el nombre del perro: ");
    const raza = prompt("Ingrese la raza del perro: ");
    const color = prompt("Ingrese el color del perro: ");
    const jugueteFavorito = prompt("Ingrese el juguete favorito del perro: ");
    const manso = prompt("El perro es manso: ");
    const descripcion = prompt("Ingrese una descrpcion del perro: ");
    
    //Creando el objeto Perro con notacion literal
    const Perro = {
        nombre,
        raza,
        color,
        jugueteFavorito,
        manso,
        descripcion,
        jugar: function(){
            return `Yo juego a la pelota con mi perro ${nombre}`;
        },
        paseo: function(){
            return `Salgo con mi perro ${nombre} de paseo cada tarde`;
        },
        busca : function(){
            return `El juguete favorito de mi perro es ${jugueteFavorito} y lo busca cada mañana`;
        }
    }

     //Mostrando los datos
     console.log("\n====================================");
     console.log(`El perro se llama ${Perro.nombre} es ${Perro.raza} de color ${Perro.color}\nsu juguete favorito es ${Perro.jugueteFavorito} y ${Perro.manso} es manso`);
     console.log("====================================");
     console.log("Descripcion:");
     console.log(Perro.descripcion);
     console.log("====================================");
     console.log(Perro.jugar());
     console.log(Perro.paseo());
     console.log(Perro.busca());
     console.log("====================================");
        break;

    case 2:
        //Objeto constructor
        function Perro2(nombre,raza,color,jugueteF,manso,descripcion){
            this.nombre = nombre;
            this.raza = raza;
            this.color = color;
            this.jugueteF = jugueteF;
            this.manso= manso;
            this.descripcion = descripcion; 
            this.saludar = function(){return "Mi perro da la patita para saludar"};
            this.comer = function(){return `A ${nombre} le gusta comer mucho`}
            this.ladra = function(){return "El perro ladra mucho por las noches"}
        }
        //Pidiendo al usuario que ingrese los datos del objeto
        console.log("\npor favor ingrese los datos que se piden a continuacion\n");
        let name = prompt("Ingrese el nombre del perro: ");
        let raza2 = prompt("Ingrese la raza del perro: ");
        let color2 = prompt("Ingrese el color del perro: ");
        let jugueteF = prompt("Ingrese el juguete favorito del perro: ");
        const manso2 = prompt("El perro es manso: ");
        const descripcion2 = prompt("Ingrese una descrpcion del perro: ");
        
        const mascota = new Perro2(name,raza2,color2,jugueteF,manso2,descripcion2);
        //Mostrando los datos
        console.log("\n====================================");
        console.log(`El perro se llama ${mascota.nombre} es ${mascota.raza} de color ${mascota.color}\nsu juguete favorito es ${mascota.jugueteF} y ${mascota.manso} es manso`);
        console.log("====================================");
        console.log("Descripcion:");
        console.log(mascota.descripcion);
        console.log("====================================");
        console.log(mascota.saludar());
        console.log(mascota.comer());
        console.log(mascota.ladra());
        break;

    default:
        console.log("La opcion ingresada no es valida")
        break;    
   }      
}
else{ console.log("Adios") }