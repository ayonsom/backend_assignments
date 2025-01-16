const express = require("express")
const { passengerRouter } = require("./routers/router.passenger")
const { operatorRouter } = require("./routers/router.operator")
const app = express()
app.use(express.json())

app.use('/passengers', passengerRouter)
app.use('/operators', operatorRouter)

app.listen(8000, ()=>console.log("http://localhost:8000/"))