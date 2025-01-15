const express = require("express")
const mongoose = require("mongoose")
const app = express()
const {userRoute} = require('./routes/route.user')

app.use(express.json())

app.use('/users', userRoute)

app.listen(8000, ()=>{
    try {
        mongoose.connect("mongodb+srv://ayon:mongodemo@cluster0.4zd7w.mongodb.net/contacts?retryWrites=true&w=majority&appName=Cluster0")
        console.log("DB connected...\nServer is running at http://localhost:8000/");    
    } catch (error) {
        console.log(error);        
    }
})