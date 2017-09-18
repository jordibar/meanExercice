'use strict';

// Función que retorna una promesa
function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(); // Con las llaves, para invocar. Resolvemos la promesa
            //reject(new Error ('fatal'));
        }, ms);
    });
}

const promesa = sleep(2000);

promesa.then(() => {
    // La promesa se ha cumplido, o sea que ha acabado bien
    console.log('Cumplido!');

}).catch((err) => {
    // La promesa ha fallado
    console.log('Error!', err);
})