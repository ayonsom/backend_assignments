const express = require('express')
const { authorRoute } = require('./routes/author.route')
const { connectToDb } = require('./db_connection/db_config')
const { blogPostRoute } = require('./routes/blogs.route')
const { loggerMw } = require('./middlewares/logger')
const app = express()
app.use(express.json())
app.use(loggerMw)

app.get('/', (req,res)=>{
    res.send(`Hello, Welcome to the BlogPost portal...\nAvailabe Routes are:-\n/authors\n/blogposts\nand more...`)
})
app.use('/author', authorRoute)
app.use('/blogposts', blogPostRoute)

app.listen(3000, ()=>{
    connectToDb()
    console.log("Server is listening at http://localhost:3000/");    
})