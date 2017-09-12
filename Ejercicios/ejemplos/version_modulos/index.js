'use strict';

const versionModulo = require('./versionModulo');

function versionModulos(callback) {
    // Leer contenido de la carpeta de node_modules

    // Sacar nombre y version de cada módulo

    // Devolver la lista de módulos
}


/*
versionModulo('chance', (error, version) => {
    if (error) {
        console.log('Hubo un error ', error);
        return;
    }
    console.log('La versión del módulo chance es ', version);
});*/

versionModulos((err, listaModulos) => {
    if (err) {
        console.log('Hubo un error ', err);
        return;
    }
    console.log(listaModulos);
});