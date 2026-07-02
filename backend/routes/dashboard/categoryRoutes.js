import express from "express";
import categoryControllers from "../../controllers/dashboard/categoryController.js";
import authMiddleware from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/category-add", authMiddleware, categoryControllers.categoryAdd);




export default router;