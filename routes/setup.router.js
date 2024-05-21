import { Router } from "express";
import { setup } from "../controllers/setup.controller.js";

const router = Router()

router.post("/", setup)

export default router;