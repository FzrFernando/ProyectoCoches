const Users = require('../models/users')
const bcryptjs = require('bcryptjs')

const addUser = async(req, res) => {
    const { name, email, password, rol} = req.body;
    const existsEmail = await User.findOne({ email});
    if (existsEmail) {
        return res.status(400).json({
            "msg": "Email existente"
        })
    }

    const user = new Users({name, email, password, rol})
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password, salt );
    
    await user.save();

    res.json(
        user
    )
}

module.exports = {addUser}