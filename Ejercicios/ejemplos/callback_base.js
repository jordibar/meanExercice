'use strict';

function suma(a, b, callback) {
    //const resultado = a + b;  // Operación síncrona
    // Devolveríamos el resultado con return, como siempre

    // Operación asíncrona
    setTimeout(() => {
        const resultado = a + b;
        //return resultado; //Mal -- nadie recogerá este resultado
        callback(resultado);
    }, 1000);
    
    // El código sigue ejecutándose por aquí
    // cuando empieza a esperar los 1000ms
    console.log('fin de función, ocurre antes de sumar');
}

function fin(resultado) { // Esto es el callback
    console.log('fin del programa, resultado', resultado);

}

suma(2, 7, fin);