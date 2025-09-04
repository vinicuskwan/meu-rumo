import { Router } from 'express';
import { 
    getAllUsers, 
    getUserById, 
    updateUser, 
    deleteUser, 
    getMetrics 
} from '../controllers/adminController';

const router = Router();

// Route to get all users
router.get('/users', getAllUsers);

// Route to get a user by ID
router.get('/users/:id', getUserById);

// Route to update a user
router.put('/users/:id', updateUser);

// Route to delete a user
router.delete('/users/:id', deleteUser);

// Route to get metrics
router.get('/metrics', getMetrics);

export default router;