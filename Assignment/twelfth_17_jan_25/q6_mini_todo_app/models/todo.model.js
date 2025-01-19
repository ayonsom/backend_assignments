// Define a Todo schema using Mongoose with the following fields:
// title: String (required)
// description: String (optional)
// completed: Boolean (default: false)
// isPublic: Boolean (default: false) — If true, the to-do item is visible to all users; otherwise, it is only visible to the user who created it.
// userId: ObjectId (references the User schema, required)

const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title : {type:String, required:true},
    description : {type:String},
    completed : {type:Boolean, default:false},
    isPublic : {type:Boolean, default:false},
    userId : {type : mongoose.Schema.Types.ObjectId, ref:"User"}
},{
    versionKey:false
})


const TodoModel = mongoose.model("Todo", todoSchema)

module.exports = {TodoModel}