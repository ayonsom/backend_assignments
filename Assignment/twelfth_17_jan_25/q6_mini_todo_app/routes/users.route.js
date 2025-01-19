const { UserModel } = require('../models/user.model');
const usersRoute = require('express').Router()

usersRoute.get('/',async (req,res) => {
    try {
        const allUsers = await UserModel.find().select('-password').populate('Todos')
        res.send({AllUsers : allUsers})
    } catch (error) {
        res.send(error)
    }
})

module.exports = {usersRoute}