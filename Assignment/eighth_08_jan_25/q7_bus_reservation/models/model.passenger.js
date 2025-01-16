const mongoose = require("mongoose");

const passengerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true,
        match : [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , 
            "email must be of valid format Ex- abcdxxx@example.com"
        ]
    },
    phone : {
        type : String,
        minLength : 10,
        maxLength : 10
    },
    reservations : [{
        type : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Reservation'
        }
    }]
})

const passengerModel = mongoose.model("Passenger", passengerSchema);

module.exports = { passengerModel }