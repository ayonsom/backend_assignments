const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name : {type:String, required:true},
    email : {type:String, required:true, unique:true}
},{
    versionKey:false,
    toJSON : { virtuals:true}
})

AuthorSchema.virtual('BlogPosts',{
    ref : 'BlogPost',
    localField : '_id',
    foreignField : 'author'
})

//.populate('BlogPosts') in router

const AuthorModel = mongoose.model("Author", AuthorSchema)

module.exports = {AuthorModel}