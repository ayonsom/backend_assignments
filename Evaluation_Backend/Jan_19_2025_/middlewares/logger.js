// const fs = require('fs')
// Logs each incoming request’s method, URL, and timestamp to the console.
const loggerMw = (req,res,next) =>{
    const data = `method : ${req.method} | URL : ${req.path} | TimeStamp : ${new Date(Date.now())}`
    console.log(data);   
    next() 
}

module.exports = { loggerMw }