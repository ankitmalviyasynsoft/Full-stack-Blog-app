import express from 'express';
import postRoutes from './posts/postRoutes.js';
import usersRoutes from './users/userRoutes.js';
import categoriesRoutes from './categories/categoriesRoutes.js';
import bannersRoutes from './banners/bannersRoutes.js';
import uploadsRoutes from './uploadFiles/uploadsRoutes.js';
import savePostRoutes from './savePost/savePostRoutes.js';



const router = express.Router();

router.use('/dummy', (req, res) => {
  res.send('Hey this is my API running 🥳')
})
router.use('/post', postRoutes);
router.use('/savepost', savePostRoutes);
router.use('/files', uploadsRoutes);
router.use('/users', usersRoutes);
router.use('/banner', bannersRoutes);
router.use('/category', categoriesRoutes);



export default router;