const express = require("express");
const { StudentModel } = require("../models/students_model");
const studentsRoute = express.Router();

studentsRoute.get("/",async(req,res)=>{
    try {
        const allStudents = await StudentModel.find()
        res.status(200).send({" msg ":"Here are all the students listed below - ", "AllStudents": allStudents})
    } catch (error) {
        console.log("Error", error);
        res.status(500).send({"msg":"Something went wrong", "Error":error});        
    }
});

studentsRoute.post("/", async(req,res)=>{
    let studentData = req.body;
    try {
        const newStudent = new StudentModel(studentData);
        await newStudent.save();
        res.status(201).send({"msg":"New Student Recorded Successfully!","New Student": newStudent});
    } catch (error) {
        console.log("Error", error);        
        res.status(500).send({"msg":"Could not Save, Something went wrong..!","Error": error});
    }
});

studentsRoute.patch("/:id", async(req,res)=>{
    let studentData = req.body;
    let {id} = req.params;
    try {
        await StudentModel.findByIdAndUpdate({"_id":id},studentData);
        const updatedStudent = await StudentModel.find({"_id":id})
        res.status(201).send({"msg":"Student Detail Updated Successfully!","Updated Student Data": updatedStudent});
    } catch (error) {
        console.log("Error", error);        
        res.status(500).send({"msg":"Could not Update, Something went wrong..!","Error": error});
    }
});

studentsRoute.delete("/:id", async(req,res)=>{
    let {id} = req.params;
    try {
        const deletedStudent = await StudentModel.findByIdAndDelete({"_id":id});
        // const updatedStudent = await StudentModel.find({"_id":id})
        res.status(201).send({"msg":"Student Deleted Successfully!","Deleted Student Data": deletedStudent});
    } catch (error) {
        console.log("Error", error);        
        res.status(500).send({"msg":"Could not Delete, Something went wrong..!","Error": error});
    }
});


module.exports = {studentsRoute}