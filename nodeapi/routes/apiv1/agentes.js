'use strict';

const express = require('express');
const router = express.Router();

// Le pedimos a mongoose que nos de el modelo de Agente
//const mongoose = require('mongoose');
//const Agente = mongoose.model('Agente');

const Agente = require('../../models/Agente');


// GET /
router.get('/', (req, res, next) => {

    const name = req.query.name;
    const age = req.query.age;
    const skip = parseInt(req.query.skip);
    const limit = parseInt(req.query.limit);

    const filter = {};

    if (name) {
        filter.name = name;
    }

    if (age) {
        filter.age = age;
    }


    // Recuperar una lista  de agentes
    Agente.list(filter, skip, limit).then( lista => {
        res.json({ success: true, rows: lista });  //res.json pone el content type a json  
    }).catch(err => {
            console.log('Error', err);
            next(err); // Para que retorne la página de error, llamo al middleware de errores
            return;
    });
});


//GET /:id
// Recupera un solo documento
router.get('/:id', (req, res, next) => {
    const _id = req.params.id;
    Agente.findOne({ _id: _id }, (err, agente) => {
        if (err) {
            consoloe.log('Error', err);
            next(err); // Para que retorne la página de error, llamo al middleware de errores
            return;    
        }
        res.json({ success: true, row: agente });  
    });
});


// POST /
// Crear un agente
router.post('/', (req, res, next) => {
    console.log(req.body);
    // Creamos un nuevo agente
    const agente = new Agente(req.body);

    // Lo guardamos en la base de datos
    agente.save((err, agenteGuardado) => {
        if (err) {
            consoloe.log('Error', err);
            next(err); // Para que retorne la página de error, llamo al middleware de errores
            return; 
        }
        res.json({succes: true, result: agenteGuardado});
    });    
});


// PUT /
// Actualizar un agente
router.put('/:clavedelagente', (req, res, next) => {
    const _id = req.params.clavedelagente;
    // Actualizo con {new: true} para que retorne el agente actualizado y no el anterior
    Agente.findOneAndUpdate({_id: _id}, req.body, {new: true}, (err, agenteActualizado) => {
        if (err) {
            consoloe.log('Error', err);
            next(err); // Para que retorne la página de error, llamo al middleware de errores
            return; 
        }
        res.json({ success: true, result: agenteActualizado });
    });
});


//DELETE
router.delete('/:id', (req, res, next) => {
    const _id = req.params.id;
    Agente.remove({_id: _id}, (err) => {
        if (err) {
            consoloe.log('Error', err);
            next(err); // Para que retorne la página de error, llamo al middleware de errores
            return; 
        } 
        res.json({ success: true });
    });
});

module.exports = router;  // para poder cargarlo en app.js