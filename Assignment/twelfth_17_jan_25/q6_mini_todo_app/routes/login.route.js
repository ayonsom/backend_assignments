// Login Route (/login): Authenticate the user using email and password. 
// Generate and return a JWT upon successful authentication.

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const { UserModel } = require('../models/user.model');
const TokenModel = require('../models/tokens.model');
const { verifyToken } = require('../authVerification');

const loginRoute = require('express').Router()

loginRoute.post('/', async (req, res) => {
    const { email, password } = req.body;
    // try {
    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) { return res.send("User not found!") }
    const passMatching = await bcrypt.compare(password, existingUser.password)
    if (passMatching) {
        const token = jwt.sign({ userId: existingUser._id }, "test-secret-key", { expiresIn: 3600 });//new token created
        const tokenData = await TokenModel.findOne({userId: existingUser._id})
        if(tokenData){
            tokenData.accessToken = token;
            tokenData.refreshToken = token;
            await tokenData.save();
        }else{
            await TokenModel.create({
            userId: existingUser._id, 
            accessToken: token, 
            refreshToken: token, 
            blackListedTokens: []
            })
        }
        
        res.send({ msg: "Login Successful!", token: token })
    } else {
        res.send("Wrong Credentials!")
    }
    // } 
    // catch (error) {
    //     res.send(error) 
    // }
})

loginRoute.post('/logout', verifyToken, async (req, res) => {
    const token = req.headers.authorization.split(" ")[1]
    const userId = req._id;
    await TokenModel.updateOne({ userId : userId },
        { $set: { accessToken: "", refreshToken:"" }, $push:{blackListedTokens:token} }
    )
    // { $set: { [`userTokens.${userId}.accessToken`]: newAccessToken } }
    res.send({msg:"logout Success..."})
})

module.exports = { loginRoute }