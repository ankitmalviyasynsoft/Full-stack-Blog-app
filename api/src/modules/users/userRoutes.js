import express from 'express';
const router = express.Router();
import { signup, login, getUserByToken, getAllUsers } from '../../controllers/users/userController.js';
import authenticateToken from '../../middleware/authMiddleware.js'


router.post('/signup', signup);
router.post('/login', login);
router.get('/getUserByToken', authenticateToken, getUserByToken);
router.get('/getAllUsers', authenticateToken, getAllUsers);


export default router;
