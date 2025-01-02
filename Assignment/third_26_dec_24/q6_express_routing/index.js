const express = require('express');
const app = express();
const bodyParse = require('body-parser');

app.use(bodyParse.json());
const usersRouter = require('./routes/users');
const todosRouter = require('./routes/todos');


const port = 3000;

app.use('/users', usersRouter);
app.use('/todos', todosRouter);

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);    
})