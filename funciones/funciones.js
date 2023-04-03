// Una función es un bloque de código independiente al scope(ambiente) que se puede ejecutar en cualquier momento. Además las fuciones pueden o no recibir datos. También se las puede concidir como objetos.

//Función declarada
function miPrimeraFuncion() {
  console.log("1");
  console.log("2");
  console.log("3");
}
miPrimeraFuncion(); //Nos devuelve: 1 2 3
console.log("*************************************************************");
console.log(" ");

//Invocación de función
function funcionQueDevuelveUnValor() {
  console.log("1");
  // return 19;
  console.log("2");
  console.log("3");
  return "La función devuelve un valor";
}

let nuevoValor = funcionQueDevuelveUnValor();
console.log(nuevoValor); //Nos devuelve: 1 2 3 "La función devuelve un valor"
console.log("*************************************************************");
console.log(" ");

//Función que devuelve valor

function saludo(nombre, apellido, edad) {
  console.log(`Hola ${nombre} ${apellido} y tengo ${edad} años`);
}
//Fución
saludo("Nicolás", "Caminos", 32);
console.log("*************************************************************");
console.log(" ");
