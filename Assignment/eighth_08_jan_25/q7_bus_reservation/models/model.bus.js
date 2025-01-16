const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
    bus_number : {
        type : String,
        unique : true,
        required : true
    },
    capacity : {
        type : Number,
        required : true,
        min : 0
    },
    operator : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Operator",
        required : true
    },
    route : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Route",
        required : true
    },
    reservations : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Reservation"
    }]
},{
    versionKey : false
})

const busModel = mongoose.model("Bus", busSchema);

module.exports = { busModel }