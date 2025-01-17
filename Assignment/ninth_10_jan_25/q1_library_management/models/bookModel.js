// Book Schema:
// title: String (required, unique).
// published_year: Number.
// genre: String.
// author: ObjectID referencing the Author schema.

const mongoose=require("mongoose")

const bookSchema=new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    published_year:{type:Number},
    genre:{type:String},
    author:{type:mongoose.Schema.Types.ObjectId,ref:"Author"}
},{
    versionKey:false
    // toJSON : { virtuals: true }
})

const BookModel=mongoose.model("Book",bookSchema)

module.exports={BookModel}