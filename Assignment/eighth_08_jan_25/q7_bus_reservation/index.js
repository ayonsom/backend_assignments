const express = require("express")
const app = express()
app.use(express.json())

app.get('/', (req,res)=> res.send("hello banchot"))

app.listen(8000, ()=>console.log("http://localhost:8000/"))