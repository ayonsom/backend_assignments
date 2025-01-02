const express = require('express');
const user_router = express.Router();
const fs = require('fs');

// let users = [];
let users = JSON.parse(fs.readFileSync('./data/users.json')); //[]

user_router.post('/', (req, res) => {
    const user = req.body;
    user_new = {id : users.length + 1, ...user};
    users.push(user_new);
    fs.writeFileSync('./data/users.json', JSON.stringify(users));
    res.status(201).send(`User "${user.name}" with "ID:${user_new.id}" added successfully`);
});

user_router.put('/:id', (req,res)=>{
    const id = req.params.id;
    const updatedUser = {id, ...req.body};
    users.map(user=>{
        if(user.id == id){
            user = updatedUser;
        }
    });
    fs.writeFileSync('./data/users.json', JSON.stringify(users));
    res.status(200).send(`User with ID:${id} has been updated:\n${JSON.stringify(updatedUser)}`);
});

user_router.delete('/:id', (req, res)=>{
    const id = req.params.id;
    // const new_user = users.filter(user => user.id !== id);
    // const new_user = [];
    // for(let i=0 ; i<users.length ; i++){
    //     if(Number(users[i].id) !== Number(id)){
    //         // console.log('users[i] :',users[i]);            
    //         new_user.push(users[i]);
    //     }
    // }
    // console.log('new_user :',new_user);
    const new_users = users.filter(user => Number(user.id) !== Number(id));
    fs.writeFileSync('./data/users.json', JSON.stringify(new_users));
    res.status(201).send(`The user with id ${id} deleted successfully.`);
});

user_router.get('/', (req,res)=>{
    res.send(JSON.stringify(users));
});

module.exports = user_router;

