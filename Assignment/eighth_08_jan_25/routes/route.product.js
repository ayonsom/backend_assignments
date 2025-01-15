const { ProductModel } = require("../models/model.product");

const productRoute = require("express").Router();


productRoute.get('/', async (req,res) => {
    try {
        const allProducts = await ProductModel.find();
        res.status(200).send({msg:"Hare are all the Products :-", data:allProducts})
    } catch (error) {
        res.send({msg : "Falied to fetch products", error : error})
    }
})

productRoute.post('/', async (req,res) => {
    try {
        const newProduct = await ProductModel.create(req.body);
        res.status(201).send({msg : "Product added Successfully.", data : newProduct})
    } catch (error) {
        res.send(error)
    }
})

module.exports = {productRoute}