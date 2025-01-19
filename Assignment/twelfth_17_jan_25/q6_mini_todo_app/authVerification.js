const jwt = require('jsonwebtoken')
const TokenModel = require('./models/tokens.model')

const verifyToken = async (req,res,next) => {
    const token = req.headers.authorization.split(" ")[1]
    
        try { 
            jwt.verify(token, "test-secret-key" ,async(err, decoded)=>{
                if(err){
                    return res.send({msg:"Invalid Token", Error:err})
                }
                else{
                    // req.body = {...req.body, userId:decoded.userId}
                    const isBlackListed = await TokenModel.findOne({userId: decoded.userId})
                    if(isBlackListed.blackListedTokens.includes(token)){return res.status(401).send("Token Blacklisted, please re-login")}
                    req.userId = decoded.userId;
                    req.exp = decoded.exp;
                    next()
                }
            }); 
            
        } catch (err) { 
            console.log("Token is invalid:", err); }   
}

module.exports = {verifyToken}