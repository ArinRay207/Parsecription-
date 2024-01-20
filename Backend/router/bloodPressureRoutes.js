import express from 'express';
import { addBPDataController, getBPDataController } from '../controller/bloodPressureController.js';
import { requireSignIn } from './../middleware/authMiddlewares.js';
const router = express.Router();

router.post("/add-bp-data", requireSignIn, addBPDataController);
router.get("/get-bp-data", requireSignIn, getBPDataController);

export default router;