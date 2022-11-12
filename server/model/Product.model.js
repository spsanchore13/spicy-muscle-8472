const mongoose = require('mongoose')
require('dotenv').config()
//require('mongoose-type-url');

const ProductSchema = new mongoose.Schema({
    url:{type:String,required:true},
   
    name:{type:String,required:true},
   
    id:{type:Number}
   

})

const Product = mongoose.model("home",ProductSchema)

module.exports = {Product}
