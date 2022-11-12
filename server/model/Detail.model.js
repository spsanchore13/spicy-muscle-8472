const mongoose = require('mongoose')
require('dotenv').config()

const DetailSchema = new mongoose.Schema({

     url:{type:String,required:true},
    name:{type:String,required:true},
    color:{type:String,required:true},
    size: {type:String,required:true},
    price:{type:Number,required:true},
    id:{type:Number},
    quantity:{type:Number,required:true},
    head1:{type:String,required:true}
   

})

const Detail = mongoose.model("detail",DetailSchema)

module.exports = {Detail }