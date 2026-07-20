import express from "express";
import brandControllers from "../../controllers/dashboard/brandController.js";
import authMiddleware from "../../middlewares/authMiddleware.js";
import { uploadImage } from "../../middlewares/uploadMiddleware.js";

const router = express.Router();

router.post("/brand-add", authMiddleware,   uploadImage("image"), brandControllers.addBrand);
router.get("/get-brand", authMiddleware, brandControllers.getBrand);
router.put("/brand-update/:id",authMiddleware,uploadImage("image"), brandControllers.updateBrand);
router.delete("/brand-delete/:id",authMiddleware,brandControllers.deleteBrand);



export default router;