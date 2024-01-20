import mongoose from "mongoose";
import User from "./user.model.js";

const bpSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        require : true
    },
    val0 : {
        type : Number,
        require : true
    },
    val1 : {
        type : Number,
        require: true
    }
},{timestamps:true});

const bp = mongoose.model("Bp",bpSchema);

export default bp;