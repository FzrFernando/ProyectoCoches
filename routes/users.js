const express = require('express')
const router = express.Router()
const { addUser } = require('../controllers/users')
const { check } = require('express-validator')
const { validateFields } = require('../helpers/validate-fields')
const { isValidRol } = require('../helpers/db-validators')

router.post('/',[
    check('email','Email is invalid').isEmail(),
    check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6, max: 12 }),
    check('name', 'Name is mandatory').not().isEmpty(),
    check('rol').custom( isValidRol),
    validateFields
], addUser)

module.exports = router