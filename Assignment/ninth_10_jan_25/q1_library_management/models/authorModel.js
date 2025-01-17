// Author Schema:
// name: String (required).
// birth_year: Number (required).
// nationality: String.
// books: Array of ObjectIDs referencing the Book schema.

const mongoose=require("mongoose")

const authorSchema=new mongoose.Schema({
    name:{type:String,required:true},
    birth_year:{type:Number,required:true},
    nationality:{type:String},
    books:[{type:mongoose.Schema.Types.ObjectId, ref:"Book"}] // ["asdkflksd", "alsdkflkj","lkasdlkfjl"]
},{versionKey:false})

const AuthorModel=mongoose.model("Author",authorSchema)

module.exports={AuthorModel}