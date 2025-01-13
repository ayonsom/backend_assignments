const express = require("express")
const mongoose = require("mongoose")
const app = express()
const {userRoute} = require('./routes/route.user')

app.use(express.json())

app.use('/users', userRoute)

app.listen(8000, ()=>{
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/contacts")
        console.log("DB connected...\nServer is running at http://localhost:8000/");    
    } catch (error) {
        console.log(error);        
    }
})