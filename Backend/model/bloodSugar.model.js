import mongoose from "mongoose";

const bsSchema = new mongoose.Schema({
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

const bs = mongoose.model("Bs",bsSchema);

export default bs;