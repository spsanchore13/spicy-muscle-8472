require('dotenv').config()
const { Router } = require("express")
const { Detail } = require("../model/Detail.model")

const detailRouter = Router()

detailRouter.get("/", async (req, res) => {
console.log(req.body)

if(req.body==+1){
    const ProductData = await Detail.find({}).sort({price:+1})
    res.send({ msg: ProductData })
}else{

    const ProductData = await Detail.find({}).sort({price:-1})
    res.send({ msg: ProductData })
}
})

detailRouter.post("/add", async (req, res) => {

    const { url,name, color, size,price,id,head1, quantity } = req.body

    const ProductData = new Detail({
        url,
        name,
        color,
        size,
        price,
        quantity,
       id,
        head1
      

    })
    await ProductData.save()
    //const data = await TodoData.insertMany(req.body)
    res.send({ msg: "product added" })

})

detailRouter.patch("/edit/:id", async (req, res) => {

    const { id } = req.params

    const ProductData = await Detail.updateOne({id:+id},req.body)
    res.send({ msg: ProductData })

})   

detailRouter.delete("/remove/:id", async (req, res) => {

    const { id } = req.params

    const ProductData = await Detail.deleteOne({id:+id})
    res.send({ msg: "ProductData deleted" })

})

module.exports = {detailRouter}