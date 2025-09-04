import { Router } from 'express';
import { 
    createExpense, 
    getExpenses, 
    getExpenseById, 
    updateExpense, 
    deleteExpense 
} from '../controllers/financeController';

const router = Router();

// Route to create a new expense
router.post('/expenses', createExpense);

// Route to get all expenses
router.get('/expenses', getExpenses);

// Route to get a specific expense by ID
router.get('/expenses/:id', getExpenseById);

// Route to update an existing expense
router.put('/expenses/:id', updateExpense);

// Route to delete an expense
router.delete('/expenses/:id', deleteExpense);

export default router;