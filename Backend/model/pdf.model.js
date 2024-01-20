import mongoose from "mongoose";
import User from "./user.model.js";

const pdfSchema = new mongoose.Schema({
    title :{
        type : String,
        require : true,
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        require : true,
    },
    public_id : {
        type : String,
        require : true,
    },
    url : {
        type : String ,
        require : true,
    },
    asset_id : {
        type : String ,
        require : true,
    }
},{timestamps : true})

const Prescriptions = mongoose.model("Prescription",pdfSchema); 
export default Prescriptions;