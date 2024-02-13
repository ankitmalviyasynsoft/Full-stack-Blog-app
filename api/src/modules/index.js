import express from 'express';
import postRoutes from './posts/postRoutes.js';
import usersRoutes from './users/userRoutes.js';
import categoriesRoutes from './categories/categoriesRoutes.js';
import bannersRoutes from './banners/bannersRoutes.js';
import uploadsRoutes from './uploadFiles/uploadsRoutes.js';



const router = express.Router();

router.use('/', (req, res) => { res.send('inside route 🥳') });
router.use('/post', postRoutes);
router.use('/files', uploadsRoutes);
router.use('/users', usersRoutes);
router.use('/banner', bannersRoutes);
router.use('/category', categoriesRoutes);



export default router;