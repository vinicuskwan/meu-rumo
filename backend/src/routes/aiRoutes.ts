import { Router } from 'express';
import { generateInsights, getUserProfile } from '../controllers/aiController';

const router = Router();

// Rota para gerar insights financeiros
router.post('/insights', generateInsights);

// Rota para obter o perfil do usuário
router.get('/profile', getUserProfile);

export default router;