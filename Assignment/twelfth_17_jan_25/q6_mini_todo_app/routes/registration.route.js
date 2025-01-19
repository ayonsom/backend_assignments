const { UserModel } = require('../models/user.model')
const bcrypt = require('bcrypt');
const registrationRoute = require('express').Router()

registrationRoute.post('/', async (req,res) => {
    const {email, password} = req.body;
    console.log(email,password);
    
    try {
        const hashedPass = await bcrypt.hash(password, 5);
        // console.log(hashedPass);
        
        if(hashedPass){
            try {
                const newUser = await UserModel.create({email, password : hashedPass})
                if(newUser){
                    await TokenModel.create({
                        userId: newUser._id, 
                        accessToken: "", 
                        refreshToken: "", 
                        blackListedTokens: []
                        })
                }
                res.status(201).send({msg:"User Registration Successful!", data:newUser})
            } catch (error) {
                console.log(`Registration Falied ${error}`)
                res.send(error)
            }            
        }
    } catch (error) {
        res.send(error)
    }
})

module.exports = {registrationRoute}