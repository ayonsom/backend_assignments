const express=require("express")
const { AuthorModel } = require("../models/authorModel")
const authorRoute=express.Router()


// get 
authorRoute.get("/",async(req,res)=>{
    try {
        const allAuthors=await AuthorModel.find().populate("books")
        res.status(200).send({message:"success",data:allAuthors})
    } catch (error) {
        console.log(error);  
        res.send({message:error})
        
    }
})



//post
 authorRoute.post("/",async(req,res)=>{
 try {
    const newAuthor=await AuthorModel.create(req.body)
    res.status(201).send({message:"Author created successfully",data:newAuthor})
 } catch (error) {
    console.log(error); 
    res.send({message:error})
 }
 })

//patch
authorRoute.patch("/:_id", async (req,res) => {
    let _id = req.params;
    let data = req.body;
    const existingAuthor = await AuthorModel.findById(_id)
    try {
        await AuthorModel.findByIdAndUpdate(_id,{
            name :  data.name? data.name : existingAuthor.name,
            nationality : data.nationality? data.nationality : existingAuthor.nationality,
            birth_year : data.birth_year? data.birth_year : existingAuthor.birth_year,
            books : data.books? [...existingAuthor.books, ...data.books] : existingAuthor.books
        })
        const updatedAuthor = await AuthorModel.findById(_id)
        res.send({message:"Success", data:updatedAuthor})
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

module.exports={authorRoute}