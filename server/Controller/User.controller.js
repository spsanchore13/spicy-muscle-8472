const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { UserModel } = require("../Model/User.model");

const Signup = async (req, res) => {
    const { email, password, name, username, mobile } = req.body;
    const userId = await UserModel.find({ email: email })
    if (userId) {
        res.status(403).send({ "message": "User already exists" })
    } else {
        bcrypt.hash(password, 7, async function (err, hash) {
            if (err) {
                res.status(500).send({ "message": "something went wrong. please sign up again" })
            }
            if (!email || !password) {
                res.send({ "message": "please filled the required fields" })
            }
            const user_data = new UserModel({
                email: email,
                password: hash,
                name: name,
                username: username,
                mobile: mobile,
            })
            await user_data.save()
            res.status(201).send({ "message": "signup successfully" })
        });
    }

}

const userOperations = { Signup }
module.exports = {
    userOperations
}
