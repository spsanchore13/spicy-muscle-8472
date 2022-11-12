require('dotenv').config()
const { Router } = require("express")
const { Product } = require("../model/Product.model")

const ProductRouter = Router()

ProductRouter.get("/", async (req, res) => {

    const ProductData = await Product.find()
    res.send({ msg: ProductData })

})

ProductRouter.post("/add", async (req, res) => {

    const { name,id,url } = req.body

    const ProductData = new Product({
        url,
        name,
        id
      

    })
    await ProductData.save()
    //const data = await TodoData.insertMany(req.body)
    res.send({ msg: "product added" })

})

ProductRouter.patch("/edit/:id", async (req, res) => {

    const { id } = req.params

    const ProductData = await Product.updateOne({id:+id},req.body)
    res.send({ msg: ProductData })

})   

ProductRouter.delete("/remove/:id", async (req, res) => {

    const { id } = req.params

    const ProductData = await Product.deleteOne({id:+id})
    res.send({ msg: "ProductData deleted" })

})

module.exports = {ProductRouter}