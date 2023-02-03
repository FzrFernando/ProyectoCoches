const { Schema, model} = require('mongoose');

const ModelosSchema = Schema({
    Nombre: {
        type: String
    },
    Caballos: {
        type: String
    },
    AnnoModelo: {
        type: String
    }
})

module.exports = model( 'Modelos', ModelosSchema)