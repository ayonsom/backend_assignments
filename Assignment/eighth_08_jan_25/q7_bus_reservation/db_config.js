const mongoose = require('mongoose')

const connectToDb = async() => {
    await mongoose.connect("mongodb+srv://ayon:mongodemo@cluster0.4zd7w.mongodb.net/bus_booking?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to DB...");    
}

module.exports = { connectToDb }