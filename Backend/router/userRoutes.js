import express from "express";
import addFilesHandler from '../controller/addFileController.js';
import  singleUpload  from "../middleware/multer.js";
import getAllFilesHandler from "../controller/getAllFilesController.js"
import { requireSignIn , isAdmin } from "../middleware/authMiddlewares.js"
const userRouter = express.Router();
userRouter.post("/add-file",requireSignIn,singleUpload,addFilesHandler);
userRouter.get("/get-all-files",requireSignIn,getAllFilesHandler);

export default userRouter;