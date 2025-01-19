const mongoose = require('mongoose')

const connectToDb = async() => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/to_do")
        console.log("DB connection Successful...");        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connectToDb}