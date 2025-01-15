const mongoose = require("mongoose")

const routeSchema = new mongoose.Schema({
    start_location : {
        type : String,
        required : true
    },
    end_location : {
        type : String,
        required : true
    },
    distance : {
        type : Number,
        required : true,
        min : 0
    },
    buses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Bus"
    }]
})

const routeModel = mongoose.model("Route", routeSchema);

module.exports = {routeModel};