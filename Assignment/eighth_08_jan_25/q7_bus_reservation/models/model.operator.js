const mongoose = require("mongoose")

const operatorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    contact_info : {
        type : String,
        required : true
    },
    buses : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Bus"
        }
    ]
},{
    versionKey : false
})

const operatorModel = mongoose.model("Operator", operatorSchema);

module.exports = {operatorModel};