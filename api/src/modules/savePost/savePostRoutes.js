import path from 'path';
import multer from 'multer';
import express from 'express';
import { savePostByUser } from '../../controllers/savePost/savePostController.js';


const router = express.Router();


router.post('/savePostByUser', savePostByUser);


export default router;