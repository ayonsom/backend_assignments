const mongoose = require("mongoose")

const connectToDb = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/event-management");
        console.log("Connected to DB...");        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connectToDb}