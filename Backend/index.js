import express from "express";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import cors from "cors";
import cloudinary from "cloudinary";
import userRouter from "./router/userRoutes.js";
import authRouter from "./router/authRoute.js";
import bpRoutes from './router/bloodPressureRoutes.js'
import bsRoutes from './router/bloodSugarRoutes.js'

const app = express();
dotenv.config("./env");
const PORT = process.env.PORT;

connectDB();
cloudinary.v2.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
})

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/auth",authRouter);
app.use('/bp/', bpRoutes);
app.use("/bs",bsRoutes);
app.use("/user",userRouter);
app.post("/get-summary",(req,res)=>{
    console.log(req.body);
    res.status(201).json({msg:"ok"});
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})

app.get('/', (req, res)=>{
    res.send({
        message: 'Welcome to the site'
    });
}); 

