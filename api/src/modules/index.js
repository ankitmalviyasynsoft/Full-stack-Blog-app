import express from 'express';
import postRoutes from './posts/postRoutes.js';
import usersRoutes from './users/userRoutes.js';
import categoriesRoutes from './categories/categoriesRoutes.js';
import bannersRoutes from './banners/bannersRoutes.js';
import uploadsRoutes from './uploadFiles/uploadsRoutes.js';



const router = express.Router();


router.use('/postdummy', (req, res) => {
  res.send('Hey this is my API postdummy 🥳')
});
// router.use('/post', postRoutes);
// router.use('/files', uploadsRoutes);
// router.use('/users', usersRoutes);
// router.use('/banner', bannersRoutes);
// router.use('/category', categoriesRoutes);



export default router;