const mongoose = require('mongoose')

const blogPostSchema = new mongoose.Schema({
    title : {type:String, required:true, maxLength : 50},
    content : {type:String},
    created_at : { type : Date, default : Date.now},
    author : {type : mongoose.Schema.Types.ObjectId, ref:"Author" , required : true}
},{
    versionKey : false
})

const BlogPostModel = mongoose.model("BlogPost", blogPostSchema);

module.exports  = { BlogPostModel }