const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
    bus : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Bus",
        required : true
    },
    passenger : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Passenger",
        required : true
    },
    seat_number : {
        type : Number,
        required : true
    },
    reservation_date : {
        type : Date,
        default : Date.now
    }
})

const reservartionModel = mongoose.model("Reservation", reservationSchema);

module.exports = { reservartionModel }