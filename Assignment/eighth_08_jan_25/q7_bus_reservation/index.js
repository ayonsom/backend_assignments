const express = require("express")
const { passengerRouter } = require("./routers/router.passenger")
const { operatorRouter } = require("./routers/router.operator")
const { busRouter } = require("./routers/route.bus")
const { routeRouter } = require("./routers/router.route")
const { reservationRouter } = require("./routers/route.reservaion")
const { connectToDb } = require("./db_config")
const app = express()
app.use(express.json())

app.use('/passengers', passengerRouter)
app.use('/operators', operatorRouter)
app.use('/buses', busRouter)
app.use('/routes', routeRouter)
app.use('reservations', reservationRouter)

app.listen(8000, ()=>{
    connectToDb();
    console.log("Server is listening at http://localhost:8000/");
})