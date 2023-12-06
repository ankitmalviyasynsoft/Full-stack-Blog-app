import express from 'express';
import { createCategories, getAllCategories, updateCategory, deleteCategory } from '../controllers/categoriesController.js';



const router = express.Router();

router.post('/create', createCategories);
router.get('/getAllCategories', getAllCategories);
router.put('/update/:id', updateCategory);
router.delete('/delete/:id', deleteCategory);



export default router;