"use strict";

// Funciones que devuelven promesas

function conArroz(plato) {
    return new Promise((resolve, reject) => {
        resolve(plato + ' arroz');
    });
}

function conAjo(plato) {
    return new Promise((resolve, reject) => {
        resolve(plato + ' ajo');
    });
}

function con(plato, indgrediente) {
    return new Promise((resolve, reject) => {
        resolve(plato + ' ' + indgrediente);
    });
}

// Vamos a encadenarlas
const paella = 'paella con';

// Sabemos que conArroz(paella) nos devuelve una promesa

conArroz(paella)
    .then(conAjo)
    .then((plato) => {
        return con(plato, 'conejo');
    })
    .then((plato) => {
    console.log(plato);
}).catch(err => {
    console.log('Error: ', err);
});