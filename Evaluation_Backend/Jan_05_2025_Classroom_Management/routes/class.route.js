const express = require("express");
const {ClassModel} = require("../models/class_model");
const { StudentModel } = require("../models/students_model");
const classRoute = express.Router();

classRoute.get("/:classId/students",async(req,res)=>{
    const {classId} = req.params;
    console.log("classId :",classId);
    
    try {
        const allStudents = await StudentModel.find({"classId" : classId});
        res.status(200).send({" msg ":"Here are all the students with ClassId listed below - ", "AllClasses": allStudents});
    } catch (error) {
        console.log("Error", error);
        res.status(500).send({"msg":"Something went wrong", "Error":error});
        
    }

})
classRoute.post("/:classId/students",async(req,res)=>{
    const {classId} = req.params;
    const {_id} = req.body;
    console.log("classId :",classId, "id ;",_id);
    
    try {
        await StudentModel.findByIdAndUpdate({"_id":_id},{"classId" : classId});
        const updatedStudent = await StudentModel.find({"_id":_id});
        res.status(200).send({" msg ":`The student with ClassId:- "${classId}" updated successfully!`, "Updated Student": updatedStudent});
    } catch (error) {
        console.log("Error", error);
        res.status(500).send({"msg":"Something went wrong", "Error":error});
        
    }

})


classRoute.get("/",async(req,res)=>{
    try {
        const allClasses = await ClassModel.find();
        res.status(200).send({" msg ":"Here are all the classes listed below - ", "AllClasses": allClasses});
    } catch (error) {
        console.log("Error", error);
        res.status(500).send({"msg":"Something went wrong", "Error":error});        
    }
})

classRoute.post("/", async(req,res)=>{
    let studentData = req.body;
    try {
        const newClass = new ClassModel(studentData);
        await newClass.save();
        res.status(201).send({"msg":"New Class Recorded Successfully!","New Student": newClass});
    } catch (error) {
        console.log("Error", error);        
        res.status(500).send({"msg":"Could not Save, Something went wrong..!","Error": error})
    }
})

classRoute.patch("/:id", async(req,res)=>{
    let classData = req.body;
    let {id} = req.params;
    try {
        await ClassModel.findByIdAndUpdate({"_id":id},classData);
        const updatedClass = await ClassModel.find({"_id":id})
        res.status(201).send({"msg":"Class Detail Updated Successfully!","Updated Class Data": updatedClass});
    } catch (error) {
        console.log("Error", error);        
        res.status(500).send({"msg":"Could not Update, Something went wrong..!","Error": error})
    }
})

classRoute.delete("/:id", async(req,res)=>{
    let {id} = req.params;
    try {
        const deletedClass = await ClassModel.findByIdAndDelete({"_id":id});
        res.status(201).send({"msg":"Class Deleted Successfully!","Deleted Class Data": deletedClass});
    } catch (error) {
        console.log("Error", error);        
        res.status(500).send({"msg":"Could not Delete, Something went wrong..!","Error": error})
    }
})


module.exports = {classRoute}