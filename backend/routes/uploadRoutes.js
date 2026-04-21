import express from "express";
import multer from "multer";
import { uploadImage, getHistory } from "../controllers/uploadController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// 🔐 protected routes
router.post("/upload", protect, upload.single("image"), uploadImage);
router.get("/history", protect, getHistory);

export default router;