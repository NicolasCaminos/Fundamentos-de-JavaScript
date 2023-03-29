/**

* Bloque inicial - SCOPE INICIAL
*/
console.log("**********var*****************");
var hola = "Frodo";
console.log("hola a todos antes del bloque", hola);
/*OTRO BLOQUE NUEVO - SCOPE NUEVO*/
{
    var hola = "pop";
    console.log("hola a todos dentro del bloque", hola);
}
console.log("hola a todos despues del bloque", hola);
console.log("***************************");

console.log("**********let*****************");
              
let holaw = "Frodo";
console.log("hola a todos antes del bloque", holaw);
/*OTRO BLOQUE NUEVO - SCOPE NUEVO*/
{
    let holaw = "pop";
    console.log("hola a todos dentro del bloque", holaw);
}
console.log("hola a todos despues del bloque",holaw); 
console.log("***************************");