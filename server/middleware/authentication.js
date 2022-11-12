var jwt = require('jsonwebtoken');
require('dotenv').config()
//const { loginRouter } = require("../route/")
const bcrypt = require('bcrypt');


const authenticate = (req, res, next) => {

    const token = req.headers.authorization

    try {

        var decoded = jwt.verify(token, process.env.SECRET);
        req.body.email = decoded.email
        next()

    } catch (err) {

        res.send({msg:"failed to login to routes"})

    }


}

module.exports = {authenticate}