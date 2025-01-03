const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const fs = require('fs');

let todos = JSON.parse(fs.readFileSync('./data/todos.json'));

router.post('/', (req, res)=>{
    const todo = req.body;
    const todo_new = {id : todos.length + 1, ...todo, id : todos.length + 1};
    todos.push(todo_new);
    fs.writeFileSync('./data/todos.json', JSON.stringify(todos));
    res.status(201).send(`Todo:"${todo.title}" added successfully`);
})
router.put('/:id', (req,res)=>{
    const id = req.params.id;
    let updatedTodo = {...req.body};
    todos.map(todo=>{
        if(todo.id == id){
            todo.title = updatedTodo.title || todo.title;
            todo.status = updatedTodo.status || todo.status;
            updatedTodo = todo;
        }
    });
    console.log('todos :',todos);
    
    fs.writeFileSync('./data/todos.json', JSON.stringify(todos));
    res.status(200).send(`Todo with ID:${id} has been updated:\n${JSON.stringify(updatedTodo)}`);
});
router.delete('/:id', (req,res)=>{
    const id = req.params.id;
    const new_todos = todos.filter(todo => Number(todo.id) !== Number(id));
    fs.writeFileSync('./data/todos.json', JSON.stringify(new_todos));
    res.status(201).send(`The todo with id ${id} deleted successfully.`);
});


router.get('/', (req,res)=>{
    res.send(`Message:\n Todo structure: {"title" : "string", "status" : "string"}\n${JSON.stringify(todos)}`);
})

module.exports = router;