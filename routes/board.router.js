import { Router } from "express";
import { getBoards, getBoardById, updateBoard, createBoard, deleteBoard } from "../controllers/board.controller.js"

const router = Router()

router.post("/", createBoard)
router.get("/", getBoards)
router.get("/:boardId", getBoardById)
router.put("/:boardId", updateBoard)
router.delete("/:boardId", deleteBoard)


export default router;