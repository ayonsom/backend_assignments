const mongoose = require("mongoose")

const connctToDb = async() => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/AssignEigth")
        console.log("connected to DB...");
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = { connctToDb }