'use strict';

const EventEmitter = require('events');

// Creamos un emisor de eventos
const emisor = new EventEmitter();

//nos suscribimos al evento
emisor.on('suena telefono', (quien) => {
    if (quien == 'madre'){
    console.log('ring ring es tu madre');
    }
});

emisor.once('suena telefono', () => {
    console.log('brrr brrr');
})

// emitimos el evento
emisor.emit('suena telefono', 'madre');
emisor.emit('suena telefono');