import path from 'path';
import multer from 'multer';
import express from 'express';
import { uploadFiles } from '../../controllers/uploadFiles/uploadsController.js';


const router = express.Router();


// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Define the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });


router.post('/uploads', upload.single('image'), uploadFiles);


export default router;