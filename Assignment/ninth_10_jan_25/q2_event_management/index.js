const express = require('express')
const app = express()
const {connectToDb} = require('./DB_Config')
app.use(express.json())

const { registerRoute } = require("./routes/routes.register")
const { attendeesRoute} = require("./routes/routes.attendees")
const { eventsRoute } = require('./routes/routes.events')
const { registrationRoute } = require('./routes/routes.registrations')
const { eventsUpdateRoute } = require('./routes/routes.events-update')

app.use("/register", registerRoute)
app.use("/attendees", attendeesRoute)
app.use("/events", eventsRoute)
app.use("events-update", eventsUpdateRoute) 
app.use('/registrations', registrationRoute);

app.listen(8000, ()=>{
    connectToDb()
    console.log("Server is listening at http://localhost:8000/")
})