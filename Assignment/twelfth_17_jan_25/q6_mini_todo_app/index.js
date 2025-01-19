const express = require('express')
const { registrationRoute } = require('./routes/registration.route')
const { connectToDb } = require('./db_config')
const { loginRoute } = require('./routes/login.route')
const { todoRoute } = require('./routes/todos.route')
const { logger } = require('./logger/logger')
const { usersRoute } = require('./routes/users.route')
const app = express()
app.use(express.json())
app.use(logger)

app.use('/registration', registrationRoute)
app.use('/login', loginRoute)
app.use('/todos', todoRoute)
app.use('/users', usersRoute)


app.listen(8000, ()=>{
    connectToDb();
    console.log("Server is listening at http://localhost:8000/")
})