const express = require('express')
const router = express.Router()

const {getMarcas, getMarca, addMarca, deleteMarca, editMarca} = require('../controllers/marcas')

router.get('/', getMarcas)
router.get('/:id', getMarca)
router.post('/', addMarca)
router.delete('/:id', deleteMarca)
router.put('/:id', editMarca)

module.exports = router