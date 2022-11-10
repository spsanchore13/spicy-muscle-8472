const express = require('express');
const Razorpay = require('razorpay')
const connection = require('./Config/db')
const cors = require('cors')
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 8080;
const ProductModel = require('./Models/product.model')
const CartRouter = require('./Routes/cart.route')
const OrderRouter = require('./Routes/order.route')
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
    res.send("hello")
})

app.use("/cart", CartRouter)
app.use("/checkout", OrderRouter)

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