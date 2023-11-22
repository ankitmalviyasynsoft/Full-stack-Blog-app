import express from 'express';
import {createCategories, getAllCategories, updateCategory} from '../controllers/categoriesController.js';



const router = express.Router();

router.post('/create', createCategories);
router.get('/getAllCategories', getAllCategories);
router.put('/:id', updateCategory);



export default router;