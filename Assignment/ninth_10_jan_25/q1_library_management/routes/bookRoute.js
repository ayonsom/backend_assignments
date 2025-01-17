const express=require("express")
const { BookModel } = require("../models/bookModel")
const bookRoute=express.Router()


// get 
bookRoute.get("/",async(req,res)=>{
    try {
        const allBooks=await BookModel.find().populate("author")
        res.status(200).send({message:"success",data:allBooks})
    } catch (error) {
        console.log(error);  
        res.send({message:error})
        
    }
})



//post
 bookRoute.post("/",async(req,res)=>{
 try {
    const newBook = await (await BookModel.create(req.body))
    res.status(201).send({message:"Book added successfully",data:newBook})
 } catch (error) {
    console.log(error); 
    res.send({message:error})
 }
 })

module.exports={bookRoute}