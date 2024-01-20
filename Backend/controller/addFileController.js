import multer from "multer";
import Prescriptions from "../model/pdf.model.js";
import singleUpload  from "../middleware/multer.js";
import getDatauri from "../Util/dataUri.js"
import cloudinary from "cloudinary"
import axios from "axios"
async function addFilesHandler(req,res){
    console.log("reached handler");
    const userID = req.user._id;
    console.log(userID);
    const file = req.file;
    console.log(file);
    if(!file) {res.status(500).json({msg : "invalid file"}); return;}
    const title = file.originalname;
    const fileuri = getDatauri(file);
    let mycloud = null;
    try{
     mycloud = await cloudinary.v2.uploader.upload(fileuri.content);
    }catch(err){
        console.log(err);
    }
    console.log(mycloud);
    const url = mycloud.secure_url;
    const asset_id = mycloud.asset_id;
    const public_id = mycloud.public_id;
    const newPrescription = new Prescriptions({title,userID,url,public_id,asset_id});
    await newPrescription.save();
    console.log("File added");
    const requestToParse = {
        url : mycloud.secure_url,
        isPrescription : false,
    };

    try{
    const response = await axios.post("http://172.18.2.133:8080/parse-prescription",requestToParse)
        //  .then((response)=>{res.status(201).json({...response,secure_url : url ,status : "ok"});console.log(response)})
        //  .catch((err)=>{console.log(err)});
        // res.status(201).json({...response,secure_url:url,status : "ok"});
        console.log("Parsed Response",response.data);
        // const responseToSend = JSON.parse(response.data);
        res.status(201).json({secure_url : url , status : "ok"});
    }catch(err){
        console.log(err);
    }

}

export default addFilesHandler;