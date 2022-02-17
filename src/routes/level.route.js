import { Router } from "express";
import {
  createLevel,
  deleteLevel,
  getAllLevels,
  getLevelById,
  updateLevel,
} from "../controllers/level.controller";

const router = Router();

// Level Routes

router.get("/level", getAllLevels);

router.post("/level", createLevel);

router.get("/level/:level", getLevelById);

router.delete("/level/:level", deleteLevel);

// router.put("/level/:level", updateLevel);

export default router;
