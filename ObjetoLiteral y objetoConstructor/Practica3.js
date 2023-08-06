//Ejercicio 3

//const de prompt para poder pedir los datos por medio de consola
const prompt = require("prompt-sync")();

//Le preguntamos al usuario si desea crear los 4 perros
let confirmacion = prompt("¿Desea que se creen los 4 perros?: ");

//Verificando la decision del usuario
if(confirmacion.toUpperCase() === "SI"){

    //Arreglo para los objetos literal perros 1 y 2
    const Pe1y2 = [];
    //Arreglo para los obejtos constructor perros 3 y 4
    const Pe3y4 = [];

    //Arreglo donde se guardan los datos de los 4 perros
    let Mascotas = [];

    //Pedido de datos del Objeto con notacion lietarl
    for(let i = 1;i<=2;i++){
       console.log("\n=======================================");
       console.log("Ingrese los datos del perro "+ i);
       console.log("=======================================");
       let nombre = prompt("Ingrese el nombre del perro: ");
       let raza = prompt("Ingrese la raza del perro: ");
       let color = prompt("Ingrese el color del perro: ");
       let manso = prompt("El perro es manso (ingresar como respuesta si o no): ");

    const Perro1y2 = {
        nombre,
        raza,
        color,
        manso
    };
      //Pasando los datos al arreglo
      Pe1y2.push(Perro1y2);
    }

    //pidiendo los datos del objeto constructor
    for(let i =1;i<=2;i++){
        console.log("\n=======================================");
        console.log("Ingrese los datos del perro "+ (i+2));
        console.log("=======================================");
        let nombre = prompt("Ingrese el nombre del perro: ");
        let raza = prompt("Ingrese la raza del perro: ");
        let color= prompt("Ingrese el color del perro: ");
        let manso = prompt("El perro es manso (ingresar como respuesta si o no): ");

        function Perro3y4(nombre,raza,colore,manso){
            this.nombre = nombre;
            this.raza = raza;
            this.color= color;
            this.manso= manso;
        }
        const perro = new Perro3y4(nombre, raza, color, manso);
        //Pasando los datos al arreglo
        Pe3y4.push(perro);
    }

    //Unimos los datos de los objetos en un solo arreglo
    Mascotas = Pe1y2.concat(Pe3y4);

  //Mostramos los datos de forma normal
  console.log("\n=======================================");
  for (let i = 0; i < Mascotas.length; i++) {
    console.log("\n=======================================");
    console.log("Datos del perro " + (i + 1));
    console.log(`El perro se llama ${Mascotas[i].nombre}, es ${Mascotas[i].raza} de color ${Mascotas[i].color} y ${Mascotas[i].manso} es manso`);
    console.log("=======================================");
  }

  //Filtramos los datos de los perros que son mansos 
  const PerrosMansos = Mascotas.filter(function(Mascotas){
    return Mascotas.manso === "si";
  });

  console.log("Datos de los perros mansos")
  console.log(PerrosMansos)

}
else{ console.log("Adios") }