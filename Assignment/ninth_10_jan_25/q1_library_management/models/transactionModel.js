// Transaction Schema:
// book: ObjectID referencing the Book schema.
// user: ObjectID referencing the User schema.
// borrow_date: Date (defaults to the current date).
// return_date: Date (nullable).
// Functionalities:

const mongoose=require("mongoose")

const transactionSchema=new mongoose.Schema({
    book:{type:mongoose.Schema.Types.ObjectId,ref:"Book", required: true },
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User", required: true },
    borrow_date:{type:Date,default:Date.now},
    return_date:{type:Date}
},{versionKey:false})

const TransactionModel=mongoose.model("Transaction",transactionSchema)

module.exports={TransactionModel}