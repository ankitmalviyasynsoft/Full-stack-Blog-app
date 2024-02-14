import express from 'express';
import { createBanners, getAllBanners, getBannerIsTrue, updateBanners } from '../../controllers/Banners/bannersController.js';



const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hey this is my API 🥳')
});

router.post('/create', createBanners);
router.get('/getAllBanners', getAllBanners);
router.get('/getBannerIsTrue', getBannerIsTrue);
router.put('/updatebanners/:id', updateBanners);
// router.get('/getCategoryById/:id', getCategoryById);
// router.delete('/delete/:id', deleteCategory);



export default router;