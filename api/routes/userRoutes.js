import express from 'express';
const router = express.Router();
import { signup, login, getUserByToken } from '../controllers/userController.js';
import authenticateToken from '../middleware/authMiddleware.js'


router.post('/signup', signup);
router.post('/login', login);
router.get('/getUserByToken', authenticateToken, getUserByToken);


export default router;
