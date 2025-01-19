const mongoose=require("mongoose")

const connectionDB=async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/library")
        console.log("Connected to Local DB...");
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports={connectionDB}