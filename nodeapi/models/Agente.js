'use strict';

// Cargamos mongoose
const mongoose = require('mongoose');

// Definimos un esquema
const agenteSchema = mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    age: Number
}, {
    // collection: 'agentes' // Para elegir cómo se llamará la colección en la bd
                             // mongoose la pluraliza en inglés de forma predeterminada
});

// Añadimos método estático
agenteSchema.statics.list = function( filter, skip, limit, callback ) {
    const query = Agente.find(filter);
    query.skip(skip);
    query.limit(limit);

    return query.exec(callback); // Ejecutamos la consulta, el exec crea una promesa
};

// Crear el modelo
const Agente = mongoose.model('Agente', agenteSchema);

// No es necesario exportar el modelo
// ya que mongoose ya lo conoce
module.exports = Agente;