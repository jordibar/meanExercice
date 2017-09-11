'use strict';

// Función que recibe un texto y tras 2 segundos lo pinta en la consola
function escribeTras2Segundos(texto, tiempo, callback) {
    setTimeout(() => {
        console.log(texto);
        callback();
    }, tiempo);
}

escribeTras2Segundos('Texto 1', 1000, () => { // y cuando termines...
    // haces esto
    escribeTras2Segundos('Texto 2', 3000, () => { // y cuando termines...
        // haces esto
        console.log('Fin');
    });

});

