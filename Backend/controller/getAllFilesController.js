import Prescriptions from "../model/pdf.model.js";

async function getAllFilesHandler(req,res){
    const userID = req.user._id;
    const allFileName = await Prescriptions.find({userID : userID});
    res.status(201).json(allFileName);
}

export default getAllFilesHandler;