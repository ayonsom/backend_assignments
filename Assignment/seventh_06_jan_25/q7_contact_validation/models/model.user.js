// name: A required string field with a minimum length of 3 characters.
// email: A required string field that must match a valid email format.
// phone: A required string field that must be exactly 10 digits long.
// age: An optional number field that must be an integer between 18 and 65.

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {type : String, minLength : 3, required : true},
    email : {type : String,  required : true, match : [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , "email must be of valid format Ex- abcdxxx@example.com"]},
    phone : {type: String, minLength : 10, maxLength : 10 , required : true, unique : true},
    age : { type:Number, min:18, max:65}
})

const UserModel = ('users', userSchema)

module.exports = {UserModel}