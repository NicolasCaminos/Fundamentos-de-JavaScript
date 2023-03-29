// Number es un objeto primitivo envolvente que permite representar y manipular valores numéricos cómo 37 o -9.25.

let a = 10;

let b = new Number(12);

let c = 1.15;

let d = "1.25";

console.log(a, b);
console.log(c);

// La función .toFixed() arrela los numeros flotantes
console.log(c.toFixed(5));
console.log(c.toFixed(1));

// La función parseInt arregla el número flotante a entero
console.log(parseInt(c));

// La función parseFloat pasa a numeros flotantes
console.log(parseFloat(c));

// La función typeof nos dice que tipo de variable es

console.log(typeof a, typeof d);

//Función aritmetica suma

console.log(a + b);

//Función aritmetica suma y pasamos el String a valor numerico flotante.
console.log(a + parseFloat(d));
