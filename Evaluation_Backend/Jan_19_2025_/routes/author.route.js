const authorRoute = require('express').Router()
const { validationMw } = require('../middlewares/validationMw');
const {AuthorModel} = require('../models/author.model')

authorRoute.get('/', async (req,res) => {
    try {
        const AllAuthors = await AuthorModel.find();
        res.status(200).send({msg:"Here are all the authors :", data:AllAuthors})
    } catch (error) {
        res.send(error)
    }
})

// find author by ObjectId and his blog posts
authorRoute.get('/:id', async (req,res) => {
    try {
        const author = await AuthorModel.findOne({_id : req.params.id}).populate("BlogPosts");
        res.status(200).send({msg:"Here is the author & his all Posts:", data:author})
    } catch (error) {
        res.send(error)
    }
})

authorRoute.post('/add_author', validationMw , async (req,res) => {
    try {
        const newAuthor = await AuthorModel.create(req.body);
        res.status(201).send({msg:"New author added successfully", data:newAuthor})
    } catch (error) {
        res.send(error)
    }
})


authorRoute.patch('/:id', async (req,res) => {
    // const {name,email} = req.body;
    try {
        const existingAuthor = await AuthorModel.findOne({_id : req.params.id});
        await AuthorModel.updateOne({_id : req.params.id},{
            name : req.body.name? req.body.name : existingAuthor.name,
            email : req.body.email? req.body.email : existingAuthor.email
        });
        const updatedAuthor = await AuthorModel.findOne({_id : req.params.id});
        res.send({msg : "updated successfully", old_data : existingAuthor, new_data:updatedAuthor})
    } catch (error) {
        res.send(error)
    }
})

authorRoute.delete('/:id', async (req,res) => {
    try {
        const deletedUser =await AuthorModel.findOneAndDelete({_id : req.params.id});
        res.send({ msg:"Deleted Successfully", deleted_data : deletedUser})
    } catch (error) {
        res.send(error)
    }
})

module.exports = {authorRoute}