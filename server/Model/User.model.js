const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
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
