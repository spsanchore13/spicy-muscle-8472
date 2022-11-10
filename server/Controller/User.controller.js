const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { UserModel } = require("../Model/User.model");

const Signup = async (req, res) => {
    const { email, password, name, username, mobile } = req.body;
    const userId = await UserModel.find({ email: email })
    console.log(userId)
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
const Login = async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email })
    const hash = user.password
    bcrypt.compare(password, hash, function (err, result) {
        if (result) {
            var token = jwt.sign({ email: email }, process.env.SECRET_KEY);
            res.status(200).send({ "message": "login successfully", "token": token, ...user })
        } else {
            res.status(401).send({ "message": "Invalid Credentials" })
        }

    });
}
const userOperations = { Signup, Login }
module.exports = {
    userOperations
}
