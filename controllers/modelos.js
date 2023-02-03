const db = require('../models/db')
const { response, request } = require('express');
const Modelos = require('../models/modelos');

async function getModelos(req, res) {
    const {Nombre} = req.query
    const query = {Nombre}
    for (const key in query) {
        if (query[key] === undefined) {
            delete query[key];
        }
    }
    const modelos = await Modelos.find(query)
    res.json(modelos)
}

function getModelo(req = request, res = response) {
    const id = req.params.id
    const modelos = db.modelos.find({ _id: id});
    if (modelos.leng) {
        res.json(modelos);
    } else {
        res.json({ message: `El modelo ${id} no existe` })
    }
}

async function addModelo(req = request, res = response) {
    const { Nombre, Caballos, AnnoModelo} = req.body;
    const modelo = new Modelos({ Nombre, Caballos, AnnoModelo});

    await modelo.save();

    res.json({
        modelo
    });
}

function deleteModelo(req = request, res = response) {
    const modeloId = req.params.id;
    const removed = db.modelos.remove({ _id: modeloId});
    res.json(removed);
}

function editModelo(req = request, res = response) {
    const modeloId = req.params.id;
    const modelo = req.body;
    const updateModelo = db.modelos.update({ _id: modeloId}, modelo);

    res.json(updateModelo)
}

module.exports = { getModelos, getModelo, addModelo, deleteModelo, editModelo}