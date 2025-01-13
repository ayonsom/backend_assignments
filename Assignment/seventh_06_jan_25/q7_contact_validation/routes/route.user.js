const express = require("express")
const { UserModel } = require("../models/model.user")
const userRoute = express.Router()
userRoute.get('/', async (req,res) => {
    try {
        const allUsers = await UserModel.find()
        res.status(200).send(`Here are all the contacts : ${allUsers}`)
    } catch (error) {
        res.send(error)
    }
})

userRoute.post('/', async (req,res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).send(`Contact added : ${user}`)
    } catch (error) {
       res.send(error) 
    }
})

module.exports = {userRoute}