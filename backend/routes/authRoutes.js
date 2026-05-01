import express from "express";
import authControllers from "../controllers/authControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/admin/login", authControllers.adminLogin);
router.get("/get-user", authMiddleware, authControllers.getUser);

export default router;