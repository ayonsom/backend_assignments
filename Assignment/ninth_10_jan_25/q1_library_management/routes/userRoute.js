const express=require("express")
const { UserModel } = require("../models/userModel")
const userRoute=express.Router()


// get 
userRoute.get("/",async(req,res)=>{
    try {
        const allUser=await UserModel.find()
        res.status(200).send({message:"success",data:allUser})
    } catch (error) {
        console.log(error);  
        res.send({message:error})
        
    }
})

//post
userRoute.post("/",async(req,res)=>{
    try {
        const newUser=await UserModel.create(req.body)
        res.status(201).send({message:"User created successfully",data:newUser})
    } catch (error) {
        console.log(error); 
        res.send({message:error})
    }
})

module.exports={userRoute}