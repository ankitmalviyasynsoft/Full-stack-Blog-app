import express from 'express';
import postRoutes from './postRoutes.js';
import usersRoutes from './userRoutes.js';
import categoriesRoutes from './categoriesRoutes.js';
import uploadsRoutes from './uploadsRoutes.js'



const router = express.Router();

router.use('/post', postRoutes);
router.use('/files', uploadsRoutes);
router.use('/users', usersRoutes);
router.use('/category', categoriesRoutes);



export default router;