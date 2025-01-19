const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
    // userTokens: {
    //     type: Map,
    //     of: new mongoose.Schema({
    //         accessToken: String,
    //         refreshToken: String,
    //         blackListedTokens: [String]
    //     }, { versionKey: false, _id: false })
    // }
    userId : {type : mongoose.Schema.Types.ObjectId , ref : 'User'},
    accessToken: String,
    refreshToken: String,
    blackListedTokens: [String]
}, {
    versionKey: false
})

const TokenModel = mongoose.model('Token', tokenSchema)

module.exports = TokenModel

// userId : {
//     accessToken : "fdkaslkdjflkja",
//     refreshToken: "sdlkfjalsdkfjlkajsd",
//     blackListedTokens : ["asldjflkj","asdkfjkjasd","asdkflkjlaskd"]
// }