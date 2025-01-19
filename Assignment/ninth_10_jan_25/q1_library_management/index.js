const express=require("express")
const {connectionDB}=require("./connection/connection")
const {userRoute}=require("./routes/userRoute")
const { authorRoute } = require("./routes/authorRoute")
const { bookRoute } = require("./routes/bookRoute")
const app=express()

// routing middlewares 
app.use(express.json())
app.use("/users",userRoute)
app.use("/authors", authorRoute)
app.use("/books", bookRoute)

app.listen(8000,()=>{
    console.log("server is listening at http://localhost:8000/")
    connectionDB()
})
