'use strict';

console.log('Inicailizamos el módulo calculadora');

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

// Para exportar las funciones que queramos lo hacemos
// a través de un objeto
module.exports = {
    suma: suma,
    resta: resta
}; 