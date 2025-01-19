const {TodoModel} = require('../models/todo.model')
const todoRoute = require('express').Router()
const {verifyToken} = require('../authVerification')

todoRoute.get('/',verifyToken,async (req,res) => {
    const userId = req.userId; // from verifyToken middleware
    try {
        const todosByUser = await TodoModel.find({userId : userId}).populate("userId")
        const todosByOtherUsers = await TodoModel.find({isPublic : true})
        res.send({msg:`Login expires after ${new Date(req.exp * 1000)}`, UserTodos : todosByUser, PublicTodos:todosByOtherUsers})
    } catch (error) {
        res.send(error)
    }          
})

todoRoute.post('/', verifyToken,async (req,res) => {
    const userId = req.userId; // from verifyToken middleware
    try {
        const newTodo = await TodoModel.create({...req.body,userId : userId})
        res.status(201).send({msg:"Todo added successfully!",data:newTodo})
    } catch (error) {
        res.send(error)
    }
})

module.exports = {todoRoute}