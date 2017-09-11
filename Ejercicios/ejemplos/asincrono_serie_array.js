'use strict';

// Función que recibe un texto y tras 2 segundos lo pinta en la consola
function escribeTras2Segundos(texto, callback) {
    setTimeout(() => {
        console.log(texto);
        callback();
    }, 2000);
}

// Bucle asíncrono en serie (cada bucle espera que el anterior acabe)
// lo utilizamos para llamar a una función n veces en serie
function serie(arr, fn, callbackFinalizacion) {
    if (arr.length == 0){ // he terminado
        callbackFinalizacion();
        return;
    }
    
    fn('texto' + arr.shift(), () => {
        serie(arr, fn, callbackFinalizacion);
    })
}

serie([1, 2, 3, 4, 5], escribeTras2Segundos, () => {
    console.log('Fin');
});

