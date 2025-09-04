import { Router } from 'express';
import { createUser, getUser, updateUser, deleteUser } from '../controllers/userController';

const router = Router();

// Rota para criar um novo usuário
router.post('/users', createUser);

// Rota para obter um usuário pelo ID
router.get('/users/:id', getUser);

// Rota para atualizar um usuário pelo ID
router.put('/users/:id', updateUser);

// Rota para deletar um usuário pelo ID
router.delete('/users/:id', deleteUser);

export default router;