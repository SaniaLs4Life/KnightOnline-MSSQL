import { Router } from "express";
import { createLevel, getAllLevels } from "../controllers/level.controller";

const router = Router();

router.get("/level", getAllLevels);
router.post("/level", createLevel);

export default router;
