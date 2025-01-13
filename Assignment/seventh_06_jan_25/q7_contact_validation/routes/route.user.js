const express = require("express")
const { UserModel } = require("../models/model.user")
const userRoute = express.Router()

userRoute.get('/', async (req,res) => {
    try {
        const allUsers = await UserModel.find()
        res.status(200).send({msg: `Here are all the contacts :`, data:allUsers})
    } catch (error) {
        res.send(error)
    }
})

// search a contact using name/email/phone send from request body
userRoute.get('/:phone', async (req,res) => {
    try {
        const allUsers = await UserModel.find(req.body || req.params )
        res.status(200).send({msg: `Here are all the contacts :`, data:allUsers})
    } catch (error) {
        res.send(error)
    }
})

userRoute.post('/', async (req,res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).send({msg:"Contact added :", data : user})
    } catch (error) {
       res.send(error) 
    }
})

userRoute.patch('/:phone', async (req,res) => {  
    try {
        const User = await UserModel.findOne(req.params)
        await UserModel.findOneAndUpdate(req.params, {
            name : req.body.name || User.name,
            email : req.body.email || User.email,
            phone : req.body.phone || User.phone,
            age : req.body.age || User?.age
        })
        const updatedUser = await UserModel.findOne(req.params)
        res.status(201).send({msg:"Contact Updated Successfully", PreviousDetails : User, UpdatedDetails : updatedUser})
    } catch (error) {
        res.send(error)
    }
})

userRoute.delete('/:phone', async (req,res) => {
    try {
        const user = await UserModel.findOneAndDelete(req.params);
        res.status(200).send({msg:"Contact deleted :", data : user})
    } catch (error) {
       res.send(error) 
    }
})

module.exports = {userRoute}