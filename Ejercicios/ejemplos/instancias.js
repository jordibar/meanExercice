'use strict';

// Creamos una función como constructor de objetos
function Fruta(nombre) {
    // this será el objeto que se va a crear
    this.nombre = nombre;

    // Métodos
    // Métodos para modificar el parámetro nombre
    // utilizamos una arrow function
    this.setNombre = (valor) => {
        this.nombre = valor;
    }
}

// Creamos un objeto con el constructor
const limon = new Fruta('limón');
limon.setNombre('naranja');

console.log(limon);

// Ejemplo de serializar el objeto
const objetoSerializado = JSON.stringify(limon);
console.log(objetoSerializado);