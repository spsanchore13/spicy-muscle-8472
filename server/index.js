const express = require('express');
const connection = require('./Config/db')
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 8080;
const ProductModel = require('./Models/product.model')

app.use(express.json())
app.use(cors())




app.get("/", (req, res) => {
    res.send("Products")
})

app.get("/products", async (req, res) => {

    const products = await ProductModel.find({})
    console.log(products)
    res.send(products)
})

app.post("/products/create", async (req, res) => {
    try {
        const products = await ProductModel(req.body)
        console.log(products)
        res.send(products)
    }
    catch (err) {
        res.send(err)
    }
})

app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connected To Database Successfully");
    }
    catch (e) {
        console.log(e);
    }
    console.log(`Listining on port ${PORT}`);
});