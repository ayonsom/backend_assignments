const mongoose = require("mongoose");
//name, subject, teacherName, startDate, endDate
const classSchema = new mongoose.Schema({
    name : String,
    subject : String,
    teacherName : String,
    startDate : String,
    endDate : String,
    classId : { type: Number, default: 0 }
})

const ClassModel = mongoose.model("classes", classSchema);

module.exports = {ClassModel}