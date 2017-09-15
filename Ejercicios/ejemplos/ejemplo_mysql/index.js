'use strict';

// Cargamos el driver
const mysql = require('mysql');

// Crear una conexión
const connection = mysql.createConnection({
    host: 'didimo.es',
    user: 'usuariocurso',
    password: 'us3r',
    database: 'cursonode'
});

// Conectar
connection.connect();

// Lanzar una query
connection.query('SELECT * FROM agentes', (err, rows, fields) => {
    if(err) {
        console.log('Hubo un error', err);
        process.exit(1);
        return;
    }
    // Pintar los resultados
    for (let i = 0; i < rows.length; i++) {
        const agente = rows[i];
        console.log(agente.idagentes, agente.name, agente.age);
    }
});