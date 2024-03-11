import path from 'path';
import multer from 'multer';
import express from 'express';
import { getAllSavedPostsByUser, savePostByUser } from '../../controllers/savePost/savePostController.js';


const router = express.Router();


router.post('/savePostByUser', savePostByUser);
router.get('/getAllSavedPostsByUser/:userId', getAllSavedPostsByUser);


export default router;