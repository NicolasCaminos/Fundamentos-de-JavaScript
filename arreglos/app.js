const a = [];
const b = [1, true, 'Hola', ['A', 'B', 'C', [1, 2, 3]]];

console.log(a);// []
console.log(b); // 1, true, 'Hola', ['A', 'B', 'C']
console.log('Este arrrglo tiene: ' + b.length + 'Elementos'); //Este arrrglo tiene: 4 Elementos
console.log(b[2]); //Hola
console.log(b[0]);// 1
console.log(b[3]); // [A,B,C]
console.log(b[3][2]) //C
console.log(b[3][3][0])//1

const c = Array.of('X', 'Y', 'Z', 9, 8, 7); //[X, Y, Z, 9, 8, 7]
console.log(c);

const d = Array(100).fill(false); //false, false, false ----
console.log(d)

const e = new Array();//[] . Estos metodos de array ya no se utilizan.
console.log(e)

const f = new Array(1, 2, 3, 4, false, 1);//[1, 2, 3, 4, false]. Estos metodos de array ya no se utilizan.
console.log(f)

const colores = ['Rojo', 'Verde', 'Azul'] //[Rojo,Verde,Azul]
console.log(colores);

colores.push('Negro');
console.log(colores) //[Rojo,Verde,Azul,Negro]


colores.pop()
console.log(colores)//[Rojo, Verde, Azul]

colores.forEach(function (el, index) {
    console.log(`<li id=${index}> ${el}<li>`)
    /*
    <li id=0> Rojo<li>
    <li id=1> Verde<li>
    <li id=2> Azul<li> 
    */
})


const nombre = Array.of('Nicolas', 'Martin', 'Martina', 'Roxana', 'Roxana');
let index = nombre.indexOf('Roxana');
console.log(index) //3