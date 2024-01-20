import multer from "multer";
import Prescriptions from "../model/pdf.model.js";
import singleUpload  from "../middleware/multer.js";
import getDatauri from "../Util/dataUri.js"
import cloudinary from "cloudinary"
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
    // res.status(201).json({...mycloud,status : "ok"});
}

export default addFilesHandler;