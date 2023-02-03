const Rol = require('../models/rol')

const isValidRol = async (rol = '') => {
    const existeRol = await Rol.findOne({ rol })
    if (!existeRol) {
        throw new Error(`Rol ${rol} no existe en la base de datos`)
    }
}

module.exports = { isValidRol}