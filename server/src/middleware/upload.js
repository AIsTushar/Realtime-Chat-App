// middlewares/upload.js
import multer from "multer";

// Use memory storage
const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB max
});

export default upload;
