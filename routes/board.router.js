import { Router } from "express";
import { getBoards, getBoardById, updateBoard } from "../controllers/board.controller.js"

const router = Router()

// router.post("")
router.get("/", getBoards)
router.get("/:boardId", getBoardById)
router.put("/:boardId", updateBoard)
// router.delete("/:userId", deleteUser)


export default router;