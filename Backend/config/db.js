import mongoose from "mongoose";
import dotenv from "dotenv";
async function connectDB(){
    try{
      const connect =  await mongoose.connect(process.env.MONGO_URL);
      console.log("MongoDB connected");
    }catch(err){
        console.log(err);
    }
}

export default connectDB;