'use strict';

// Creamos un objeto con closures
function crearAgente(nombre) {
    let edad = 30;
    return { // Devolvemos un objeto que tenga varias funciones
        getNombre: function() {
            // siempre tendré acceso al contexto que tenía creaAgente cuando me crearon
            return nombre;
        },
        setNombre: function(valor) {
            nombre = valor;
        },
        saluda: function() {
            console.log(`Hola soy el agente ${nombre}`);
        }

    };
}

// Para utilizarlo NO necesito hacerlo con new
// ya que ya me va a devolver un objeto creado
const brown = crearAgente('Brown');

//console.log(brown.getNombre());
//brown.saluda();

setTimeout(brown.saluda, 1000);