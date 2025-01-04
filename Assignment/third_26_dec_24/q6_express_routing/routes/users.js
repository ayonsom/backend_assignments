const express = require('express');
const user_router = express.Router();
const fs = require('fs');

// let users = [];
let users = JSON.parse(fs.readFileSync('./data/users.json')); //[]
// console.log(typeof users, Array.isArray(users));


user_router.post('/', (req, res) => {
    const user = req.body;
    user_new = {id : users.length + 1, ...user};
    users.push(user_new);
    fs.writeFileSync('./data/users.json', JSON.stringify(users));
    res.status(201).send(`User "${user.name}" with "ID:${user_new.id}" added successfully`);
});

user_router.put('/:id', (req,res)=>{
    const id = req.params.id;
    let updatedUser = { ...req.body};
    // console.log('updatedUser :',updatedUser);
    
    users.map(user=>{
        // console.log('user :', user);
        
        if(user.id == id){           
            // user = {...updatedUser};
            user.id = updatedUser.id || user.id;
            user.name = updatedUser.name || user.name;
            user.age = updatedUser.age || user.age;;
            user.role = updatedUser.role || user.role;
            // console.log('user :', user);
            updatedUser = user;
        }
    });
    // console.log('users :',users);
    
    fs.writeFile('./data/users.json', JSON.stringify(users), (err)=>{
        if(err){
            console.log('Error:',err);
        }
    });
    res.status(200).send(`User with ID:${id} has been updated:\n${JSON.stringify(updatedUser)}`);
});

user_router.delete('/:id', (req, res)=>{
    const id = req.params.id;
    const new_users = users.filter(user => Number(user.id) !== Number(id));
    fs.writeFileSync('./data/users.json', JSON.stringify(new_users));
    res.status(201).send(`The user with id ${id} deleted successfully.`);
});

user_router.get('/', (req,res)=>{
    res.send(JSON.stringify(users));
});

module.exports = user_router;

