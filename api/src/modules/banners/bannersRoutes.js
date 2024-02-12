import express from 'express';
import { createBanners, getAllBanners, updateBanners } from '../../controllers/Banners/bannersController.js';



const router = express.Router();

router.post('/create', createBanners);
router.get('/getAllBanners', getAllBanners);
router.put('/updatebanners/:id', updateBanners);
// router.get('/getCategoryById/:id', getCategoryById);
// router.delete('/delete/:id', deleteCategory);



export default router;