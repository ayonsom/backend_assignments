const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    classId : { type: Number, default: 0 }
})

const StudentModel = mongoose.model("students", studentSchema);

module.exports = {StudentModel}