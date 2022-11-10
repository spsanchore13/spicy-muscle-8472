const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { UserModel } = require("../Model/User.model");

const Signup = async (req, res) => {
    const { email, password, name, username, mobile } = req.body;
    if (!email || !password || !name || !username || !mobile) {
        res.status(400).json({ msg: 'Please enter all fields' });
    }
    const userId = await UserModel.find({ email: email })
    console.log(userId)
    if (userId) {
        res.status(400).send({ "message": "User already exists" })
    } else {
        bcrypt.hash(password, 7, async function (err, hash) {
            if (err) {
                res.status(500).send({ "message": "something went wrong. please sign up again" })
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
    if (!email || !password) {
        res.status(400).json({ msg: 'Please enter all fields' });
    }
    const user = await UserModel.findOne({ email })
    if (!user) {
        res.status(400).json({ msg: 'User does not exist' });
    }
    const hash = user.password
    bcrypt.compare(password, hash, function (err, result) {
        if (result) {
            const token = jwt.sign({ email: email }, process.env.SECRET_KEY, { expiresIn: 60 * 60 });
            res.status(200).send({ "message": "login successfully", "token": token })
        } else {
            res.status(401).send({ "message": "Invalid Credentials" })
        }

    });
}
const userOperations = { Signup, Login }
module.exports = {
    userOperations
}
