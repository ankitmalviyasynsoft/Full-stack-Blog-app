import express from 'express';
import postRoutes from './posts/postRoutes.js';
import usersRoutes from './users/userRoutes.js';
import categoriesRoutes from './categories/categoriesRoutes.js';
import uploadsRoutes from './uploadFiles/uploadsRoutes.js'



const router = express.Router();

router.use('/post', postRoutes);
router.use('/files', uploadsRoutes);
router.use('/users', usersRoutes);
router.use('/category', categoriesRoutes);



export default router;