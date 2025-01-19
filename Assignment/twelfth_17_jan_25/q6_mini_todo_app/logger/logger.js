const fs = require('fs');

const logger = (req,res,next)=>{
    const data = `${new Date(Date.now())} | path : ${req.path} | method : ${req.method}\n`
    fs.appendFileSync('./logger/logs.txt',data)
    next()
}

module.exports = {logger}