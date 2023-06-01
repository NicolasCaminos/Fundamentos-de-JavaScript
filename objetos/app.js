//el uso de const
const b = {
    // Objeto vacio
}
console.log(b); // {}

const c = new Object()
console.log(c); //{ }

/** dentos de un objeto las varibles se le llaman atributos/propiedades y las funciones se le llaman metodos
 */
const nico = {
    nombre: 'Nicolas',
    apellido: 'Caminos',
    edad: 35,
    contacto: {
        mail: 'nicoasis7@gmail.com',
        celular: '54912345678'
    },
    saludar: function () {
        console.log('Hola :) ')
    },
    decirMinombre: function () {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad}`);
    }
}
console.log(nico); /*
{
  nombre: 'Nicolas',  
  apellido: 'Caminos',
  edad: 35,
  contacto: { mail: 'nicoasis7@gmail.com', celular: '54912345678' },
  saludar: [Function: saludar]
*/
console.log(nico.nombre); /*
{
  nombre: 'Nicolas',  
*/
console.log(nico.contacto); /*        mail: 'nicoasis7@gmail.com',
        celular: '54912345678' */
console.log(nico.contacto.celular) //  celular: '54912345678'
nico.saludar()//Hola :)
nico.decirMinombre() //Hola me llamo Nicolas
//Hola me llamo Nicolas Caminos y tengo 35
