const express = require("express");
const mongoose = require("mongoose");
const { studentsRoute } = require("./routes/students.route");
const { classRoute } = require("./routes/class.route");
const app = express()
app.use(express.json())
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
// const { enrollRoute } = require("./routes/enroll");

//Logging Middleware: Implement a simple logging middleware that logs the method, URL, and timestamp of each incoming request.
const logStream = fs.createWriteStream(path.join(__dirname, 'logs', 'access.logs'),{flags : 'a'});
morgan.format('custom', ':method :url :date[web] ')
app.use(morgan('custom', {stream:logStream}))


app.use("/api/students", studentsRoute);
app.use("/api/classes", classRoute);
// app.use("/api/classes/:classId/enroll", enrollRoute);


app.listen(3000, async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/");
        console.log("Coonected to the DataBase");    
        console.log("server is listening on http://localhost:3000/");    
    } catch (error) {
        console.log("Server Start Failed", error);        
    }
    
})