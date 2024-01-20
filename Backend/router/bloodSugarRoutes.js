import express from 'express';
import { addBSDataController, getBSDataController } from '../controller/bloodSugarController.js';
import { requireSignIn } from './../middleware/authMiddlewares.js';
const router = express.Router();

router.post("/add-bs-data", requireSignIn, addBSDataController);
router.get("/get-bs-data", requireSignIn, getBSDataController);

export default router;