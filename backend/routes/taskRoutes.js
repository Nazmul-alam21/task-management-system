import express from "express";
import protect from "../middleware/authMiddleware.js";
import { createTask, deleteTask, getTasks, updateTask } from "../controllers/taskController.js";
import authorizeRoles from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, createTask);
router.get("/", protect, getTasks);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, deleteTask);

export default router;