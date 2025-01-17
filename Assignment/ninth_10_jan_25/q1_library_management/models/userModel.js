// User Schema:
// username: String (required, unique).
// email: String (required, unique).
// borrowed_books: Array of ObjectIDs referencing the Transaction schema.

const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    borrowed_books:{type:mongoose.Schema.Types.ObjectId},
},{versionKey:false})


const UserModel=mongoose.model("User",userSchema)

module.exports={UserModel}