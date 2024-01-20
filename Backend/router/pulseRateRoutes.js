import express from "express";
import { requireSignIn , isAdmin } from "../middleware/authMiddlewares";
import { addPRDataController, getPRDataController } from "../controller/pulseRateController";
const router = express.Router();

router.post("/add-pr-data",requireSignIn,addPRDataController);
router.get("/get-pr-data",requireSignIn,getPRDataController);

export default router;