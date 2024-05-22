import { Router } from "express";
import { createTask, getTasks, getTaskById, updateTask, deleteTask } from "../controllers/task.controller.js"

const router = Router()

router.post("/:boardId/tasks", createTask)
router.get("/:boardId/tasks", getTasks)
router.get("/:baordId/tasks/:taskId", getTaskById)
router.put("/:boardId/tasks/:taskId", updateTask)
router.delete("/:boardId/tasks/:taskId", deleteTask)

export default router;