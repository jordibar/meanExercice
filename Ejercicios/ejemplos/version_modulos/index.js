'use strict';

const versionModulo = require('./versionModulo');
const fs = require('fs');
const async = require('async');

function versionModulos(callback) {
    // Leer contenido de la carpeta de node_modules
    fs.readdir('./node_modules', (err, lista) => {
        if(err) {
            callback(err);
            return;
        }
        console.log(lista);

        // Sacar nombre y version de cada módulo
        //Para iterar la lista lo tenemos que hacer con un bucle asíncrono
        //usaremos async.concat
        async.concat(lista, function iterador(item, callbackIteracionEnCurso){

           // Excluimos la carpeta .bin y otros posibles ficheros ocultos
            if (item[0] === '.') { //Si la primera letra es un punto '.'
                process.nextTick(() => { // no hacemos nada, y metemos la llamada en la 
                                         // siguiente vuelta del event loop
                    callbackIteracionEnCurso(null);
                });
                return;                
            }

            // Ya tenemos el nombre del módulo
            // recogemos su versión
            versionModulo(item, (error, version) => {
                if (error) {
                    callbackIteracionEnCurso(error);
                    return;
                }
                // No ha fallado, devolvemos el nombre del módulo
                // y la versión
                callbackIteracionEnCurso(null, {item, version});                 
            });           
        }, callback);
    });

    

    // Devolver la lista de módulos
}

versionModulos((err, listaModulos) => {
    if (err) {
        console.log('Hubo un error ', err);
        return;
    }
    console.log(listaModulos);
});


