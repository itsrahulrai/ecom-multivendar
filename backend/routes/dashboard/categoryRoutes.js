import express from "express";
import categoryControllers from "../../controllers/dashboard/categoryController.js";
import authMiddleware from "../../middlewares/authMiddleware.js";
import { uploadImage } from "../../middlewares/uploadMiddleware.js";

const router = express.Router();

router.post("/category-add", authMiddleware,   uploadImage("image"), categoryControllers.addcategory);
router.get("/get-category", authMiddleware, categoryControllers.getCategory);
router.put("/category-update/:id",authMiddleware,uploadImage("image"), categoryControllers.updateCategory);
router.delete("/category-delete/:id",authMiddleware,categoryControllers.deleteCategory);



export default router;