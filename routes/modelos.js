const express = require('express')
const router = express.Router()

const {getModelos, getModelo, addModelo, deleteModelo, editModelo} = require('../controllers/modelos')

router.get('/', getModelos)
router.get('/:id', getModelo)
router.post('/', addModelo)
router.delete('/:id', deleteModelo)
router.put('/:id', editModelo)

module.exports = router