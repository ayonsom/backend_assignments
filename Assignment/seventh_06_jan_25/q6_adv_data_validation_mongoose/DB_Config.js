const mongoose = require("mongoose");


const connectToDb = async() => {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
        console.log("connected to DataBase...\nServer is listening at http://localhost:8000/");        
    } catch (error) {
        console.log("Server connection Failed..!",error);        
    }
}

module.exports = {connectToDb}