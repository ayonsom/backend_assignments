const blogPostRoute = require('express').Router()
const { validationMw } = require('../middlewares/validationMw');
const { BlogPostModel } = require('../models/blogPost.model');

// fetch all blogs
blogPostRoute.get('/', async (req,res) => {
    try {
        const allBlogs = await BlogPostModel.find();
        res.status(200).send({msg : "Here is all blogs", data : allBlogs})
    } catch (error) {
        res.send(error)
    }
})

// fetch a single blog_post by it's own id (blogpost document _id)
blogPostRoute.get('/:id', async (req,res) => {
    try {
        const blogsById = await BlogPostModel.findById({_id:req.params.id});
        res.status(200).send({msg : "Here is the requested blog :", data:blogsById})
    } catch (error) {
        res.send(error)
    }
})


// fetch blog_posts by author _id
blogPostRoute.get('/author/:author', async (req,res) => {
    try {
        const blogsById = await BlogPostModel.find({author:req.params.author});
        res.status(200).send({msg : "Following blogs are written by given author id:", data:blogsById})
    } catch (error) {
        res.send(error)
    }
})

// post a blog
blogPostRoute.post('/new_post',validationMw, async (req,res) => {
    try {
        const newBlog = await BlogPostModel.create(req.body);
        res.status(201).send({msg : "Blog Creation Successful!", data:newBlog})
    } catch (error) {
        res.send(error)
    }
})

// modify or patch a post by post _id
blogPostRoute.patch('/:id', async (req,res) => {
    try {
        const existingPost = await BlogPostModel.findOne({_id : req.params.id})
        await BlogPostModel.updateOne({_id : req.params.id},{
            title : req.body.title? req.body.title : existingPost.title,
            content : req.body.content? req.body.content : existingPost.content
        });
        const newPost = await BlogPostModel.findOne({_id : req.params.id})
        res.send({ msg : "Post updated successfully", old_post : existingPost, new_post : newPost})
    } catch (error) {
        res.send(error)
    }
})

blogPostRoute.delete('/:id', async (req,res) => {
    try {
        const deletedBlogPost = await BlogPostModel.findByIdAndDelete({_id : req.params.id});
        res.send({msg : "Blog deleted Successfully", data : deletedBlogPost})
    } catch (error) {
        res.send(error)
    }
})


module.exports = { blogPostRoute }