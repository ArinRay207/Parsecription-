import mongoose from "mongoose";

const prSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        require : true
    },
    val0 : {
        type : Number,
        require : true
    },
},{timestamps:true});

const pr = mongoose.model("Os",prSchema);

export default pr;