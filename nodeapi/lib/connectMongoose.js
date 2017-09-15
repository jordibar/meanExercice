'use strict';

// Cargamso Mongoose
const mongoose = require('mongoose');

// Creamos un objeto de conexión,
// hacemos una especie de alias
const conn = mongoose.connection;

// Control de error
conn.on('error', (err) => {
    console.log('Error de conexión', err);
    process.exit(1);
});

// Informamos de que sí nos hemos conectado
conn.once('open', () => {
    console.log('Conectado a MongoDB.');
});

// La cadena de conexión es como una URL
// pero con protocolo mongodb
mongoose.connect('mongodb://localhost/cursonode');


// No necesitamos exportar la conexión,
// ya que mongoose se encarga de mantenerla internamente