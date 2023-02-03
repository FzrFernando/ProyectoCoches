const { Schema, model} = require('mongoose');

const MarcasSchema = Schema({
    Nombre: {
        type: String,
        unique: true
    },
    AnnoFundacion: {
        type: String
    },
    Fundador: {
        type: String
    }
})

module.exports = model( 'Marcas', MarcasSchema );