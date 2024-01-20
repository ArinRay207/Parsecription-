import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        trim: true
    },

    email:{
        type: String,
        require: true,
        unique: true
    },

    phoneNumber:{
        type : String,
        require: true
    },

    password:{
        type : String,
        require : true
    },

    age:{
        type : Number,
        min : 0,
        max : 150,
        require : true
    },

    gender:{
        type : String,
        require:true
    }

},{timestamps:true})

const User = mongoose.model("User",userSchema);

export default User;