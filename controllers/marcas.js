const db = require('../models/db')
const { response, request } = require('express');
const Marcas = require('../models/marcas');

async function getMarcas(req, res) {
    const {Nombre} = req.query
    const query = {Nombre}
    for (const key in query) {
        if (query[key] === undefined) {
            delete query[key];
        }
    }
    const marcas = await Marcas.find(query)
    res.json(marcas)
}

function getMarca( req = request, res = response) {
    const id = req.params.id
    const marcas = db.marcas.find({ _id: id});
    if (marcas.length) {
        res.json(marcas)
    } else {
        res.json({ message: `La marca ${id} no existe` })
    }
}

async function addMarca(req = request, res = response) {
    const { Nombre, AnnoFundacion, Fundador} = req.body
    const marca = new Marcas({ Nombre, AnnoFundacion, Fundador});

    await marca.save();

    res.json({
        marca
    })
}

function deleteMarca(req = request, res = response) {
    const marcaId = req.params.id;
    const removed = db.marcas.remove({ _id: marcaId});
    res.json(removed);
}

function editMarca(req = request, res = response) {
    const marcaId = req.params.id;
    const marca = req.body;
    const updatedMarca = db.marcas.update({ _id: marcaId}, marca);

    res.json(updatedMarca)
}

module.exports = { getMarcas, getMarca, addMarca, deleteMarca, editMarca }