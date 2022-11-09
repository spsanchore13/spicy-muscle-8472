const express = require("express");
const { routeUser } = require("./Route/User.route");
const connection = require("./Config/db");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
app.use(express.json())
const cors = require("cors");


app.use(cors())
app.use("/auth", routeUser)

app.listen(port, async () => {
    try {
        await connection,
            console.log("database connected")
    }
    catch (err) {
        console.log("error in database connecting")
        console.log(err)
    }
    console.log("server is listening on " + port)
})