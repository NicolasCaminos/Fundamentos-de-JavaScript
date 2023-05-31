// Una función es un bloque de código independiente al scope(ambiente) que se puede ejecutar en cualquier momento. 
//Además las fuciones pueden o no recibir datos.También se las puede concidir como objetos.

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
    (`Hola ${nombre} ${apellido} y tengo ${edad} años`);
}
//Fución
saludo("Nicolás", "Caminos", 32);
console.log("*************************************************************");
console.log(" ");

funcion();
console.log("*************************************************************");
console.log(" ");
//Funciones declaradas vs Funciones expresadas

function funcion() {
    console.log(
        "Esta función puede invocarse en cualquier parte del scope, incluso antes de declarse la misma."
    );
}
funcion();
console.log("*************************************************************");
console.log(" ");

const funcionExpesadas = function () {
    console.log(
        "Esto es una función expresada, es decir, una función que se le ha asignado como valor una variable. Si invocamos la misma jS antes de su definición nos dirá... ReferenceError: Cannot access funcionExpesadas before initialization"
    );
};
funcionExpesadas();
console.log("*************************************************************");
console.log(" ");
