//Enroll a Student in a Class

// Endpoint to add a student to a class (could be POST /api/classes/:classId/enroll or a dedicated /api/enrollments).
// Show usage of references/relations in Mongoose.
// List Students in a Class
// Endpoint to retrieve all students enrolled in a specific class (e.g., GET /api/classes/:classId/students).

const express = require("express");
const {ClassModel} = require("../models/class_model")
const { StudentModel } = require("../models/students_model");
const enrollRoute = express.Router();

enrollRoute.get("/",async(req,res)=>{
    const {classId} = req.params;
    console.log("classId :",classId);
    
    try {
        const allClasses = await ClassModel.find({"classId" : classId})
        res.status(200).send({" msg ":"Here are all the ClassId listed below - ", "AllClasses": allClasses})
    } catch (error) {
        console.log("Error", error);
        res.status(500).send({"msg":"Something went wrong", "Error":error})
        
    }

})

module.exports = {enrollRoute}