import express from 'express';
import { createCategories, getAllCategories, updateCategory, deleteCategory, getCategoryById } from '../../controllers/categories/categoriesController.js';



const router = express.Router();

router.post('/create', createCategories);
router.get('/getAllCategories', getAllCategories);
router.get('/getCategoryById/:id', getCategoryById);
router.put('/update/:id', updateCategory);
router.delete('/delete/:id', deleteCategory);



export default router;