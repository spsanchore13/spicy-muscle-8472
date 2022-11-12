const jwt = require("jsonwebtoken")
const authentication = (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1]
    try {
        var decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.body.email = decoded.email
        next()
    }
    catch (err) {
        res.redirect('http://localhost:3000/')
        res.send("Please login again")
        console.log(err)
    }
}

const authorisation = (permittedrole) => {
    return async (req, res, next) => {
        const email = req.body.email
        const user = await UserModel.findOne({ email: email })
        const role = user.role;
        if (permittedrole.includes(role)) {
            next()
        }
        else {
            res.send("Not authorised")
        }
    }
}

module.exports = {
    authentication,
    authorisation
}