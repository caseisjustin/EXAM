import { Router } from "express";
import { getAllusers, getUserById, updateUser, deleteUser } from "../controllers/user.controller.js";

const router = Router()

router.get("/", getAllusers)
router.get("/:userId", getUserById)
router.put("/:userId", updateUser)
router.delete("/:userId", deleteUser)

export default router;