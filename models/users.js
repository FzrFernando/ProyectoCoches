const { Schema, model} = require('mongoose');

const UsersSchema = Schema({
    Nombre: {
        type: String
    },
    Email: {
        type: String,
        unique: true
    },
    Password: {
        type: String
    },
    rol: {
        type: String,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    }
})

module.exports = model( 'Users', UsersSchema )