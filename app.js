const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();

const app = express()

const modelos = require('./routes/modelos')
const marcas = require('./routes/marcas')
const users = require('./routes/users')

// DATABASE CONNECTION
async function connectAtlas(){
    await dbConnection()
}
connectAtlas()
//MIDDLEWARE
app.use(express.json())

// ROUTES
app.use('/marcas', marcas)
app.use('/modelos', modelos)
app.use('/users', users)

app.listen(process.env.PORT)