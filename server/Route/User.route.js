const { Router } = require("express")
const { userOperations } = require("../Controller/User.controller")

const routeUser = Router()

routeUser.post("/add", userOperations.Signup)

module.exports = {
    routeUser
}