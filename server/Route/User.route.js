const { Router } = require("express")
const { userOperations } = require("../Controller/User.controller")

const routeUser = Router()

routeUser.post("/signup", userOperations.Signup)

module.exports = {
    routeUser
}