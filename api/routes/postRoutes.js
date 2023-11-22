import express from 'express';
import {createPost, getAllPosts, updatePost} from '../controllers/postController.js';



const router = express.Router();

router.post('/create', createPost);
router.get('/getAllPost', getAllPosts);
router.put('/:id', updatePost);



export default router;