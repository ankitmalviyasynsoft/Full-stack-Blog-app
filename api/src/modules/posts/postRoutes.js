import path from 'path';
import multer from 'multer';
import express from 'express';
import { createPost, getAllPosts, getPostById, getRecentPost, getSimilarPostsByCategoryTitle, searchPostByTitleAndContent, updatePost, updateViewCountPost } from '../../controllers/posts/postController.js';


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


router.post('/create', upload.single('image'), createPost);
router.get('/getAllPost', getAllPosts);
router.get('/getRecentPost', getRecentPost);
router.get('/getPostById/:id', getPostById);
router.put('/update/:id', updatePost);
router.post('/views/:id', updateViewCountPost);
router.get('/searchByTitleAndContent', searchPostByTitleAndContent);
router.get('/getSimilarPostsByCategoryTitle', getSimilarPostsByCategoryTitle);



export default router;