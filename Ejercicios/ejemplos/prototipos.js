'use strict';

// Definimos una función constructora de objetos
function Persona(nombre) {
    this.nombre = nombre;
}

// Construimos un objeto Persona
const pepe = new Persona('Pepe');

// Añadir propiedades al prototipo de las personas
Persona.prototype.saluda = function() {
    console.log(`Hola me llamo ${this.nombre}`);
}

pepe.saluda();

// Herencia simple de persona _________________________
function Agente(nombre) {
    // Ejecutamos el constructor de personas con mi this
    Persona.call(this, nombre); // sería como ejecutar Persona(nombre)
}

//Heredamos sus propiedades y métodos
Agente.prototype = new Persona('Soy un prototipo');

const smith = new Agente('Smith');

smith.saluda();

// Herencia mútliple ________________________________
// Mixin Superhéroe
function Superheroe() {
    this.vuela = function() {
        console.log(this.nombre, ' vuela');
    }

    this.esquivaBalas = function() {
        console.log(this.nombre, ' esquiva balas');
    }
}

// Copiamos todas las propiedades de Superheroe al prototipo de Agente
Object.assign(Agente.prototype, new Superheroe());

smith.vuela();
smith.esquivaBalas();