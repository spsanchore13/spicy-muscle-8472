const { Schema, model } = require('mongoose')
const { isEmail } = require('validator');
const userSchema = new Schema({
    email: {
        type: String, required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String, requirrequired: [true, 'Please enter a valid password'],
        minlength: [6, 'Minimum password length must be 6 characters']
    },
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    username: { type: String, required: true },
    role: { type: String, enum: ["Admin", "User"], default: "User" }

}, {
    timestamps: true
})
const UserModel = model("user", userSchema)

module.exports = {
    UserModel
}
