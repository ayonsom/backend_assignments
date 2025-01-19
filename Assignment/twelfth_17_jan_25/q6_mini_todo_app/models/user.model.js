// Define a User schema using Mongoose with the following fields:
// email: String (unique and required)
// password: String (required, hashed before storing)


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true,
     // match : [^[a-zA-Z0-9._-+%]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$]
     // match : /^[a-zA-Z0-9._-+%]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        match : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    password : {
        type : String,
        required : true
    }
},{
    versionKey:false,
    toJSON:{virtuals:true} // Another method --> after userSchema.virtuals, userSchema.set("toJSON",{virtuals:true})
})

userSchema.virtual('Todos', {
    ref: 'Todo',
    localField: '_id',
    foreignField: 'userId'
})

// userSchema.set("toJSON",{virtuals:true})

{/*
userSchema.virtual("newFieldName",{
   ref : 'collection name to looked upon',
   localField : 'common value between collections in current Schema',
   foreignField : 'common value between collections in referred Schema' 
})   
*/}

const UserModel = mongoose.model("User", userSchema)

module.exports  = { UserModel }