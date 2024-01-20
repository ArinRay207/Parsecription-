import express from "express";
import { requireSignIn , isAdmin } from "../middleware/authMiddlewares";
import { addOSDataController , getOSDataController } from "../controller/oxygenSaturationController";
const router = express.Router();

router.post("/add-os-data",requireSignIn,addOSDataController);
router.get("/get-os-data",requireSignIn,getOSDataController);

export default router;