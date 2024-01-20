import mongoose from "mongoose";

const osSchema = new mongoose.Schema({
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

const os = mongoose.model("Os",osSchema);

export default os;