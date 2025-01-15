const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    price : {
        type : Number,
        required : true,
        min : 0
    },
    category : {
        type : String,
        required : true
    },
    stock : {
        type : Number,
        required : true,
        min : 0
    },
    created_at : {
        type : Date,
        default : Date.now
    }
},{
    versionKey : false
})

const ProductModel = mongoose.model("Product",productSchema);

module.exports = {ProductModel}