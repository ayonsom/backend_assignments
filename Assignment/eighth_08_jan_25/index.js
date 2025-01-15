const express = require('express')
const { productRoute } = require('./routes/route.product')
const { connctToDb } = require('./db_config')
const app = express()

app.use(express.json())

app.use("/products", productRoute)

app.listen(8000, ()=>{
    connctToDb()
    console.log("server is listening at http://localhost:8000/");    
})