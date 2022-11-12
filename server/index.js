require('dotenv').config()
const express = require("express")
const app = express()
const  {connection} = require("./Config/db")
 const {ProductRouter} = require("./route/Productpage.route")
const { detailRouter } = require("./route/Detailpage.route")
var cors = require('cors')
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5500


// app.get("/",(req,res)=>{
//     console.log("tru")
//     res.send("coo")
// })

app.use("/product",ProductRouter)
app.use("/detail",detailRouter)


app.listen(PORT, async ()=>{

    try{

        await connection
        console.log(`connected to ${PORT}`)


    }catch(err){

        console.log(err)
        console.log("connection failed")
    }
})