import { Request, Response } from 'express';
import { Expense } from '../models/expense';
import { User } from '../models/user';

// Função para registrar uma nova despesa
export const addExpense = async (req: Request, res: Response) => {
    const { userId, description, amount, date } = req.body;

    try {
        const expense = new Expense({
            userId,
            description,
            amount,
            date,
        });

        await expense.save();
        res.status(201).json({ message: 'Despesa registrada com sucesso!', expense });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao registrar despesa', error });
    }
};

// Função para obter todas as despesas de um usuário
export const getExpenses = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const expenses = await Expense.find({ userId });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter despesas', error });
    }
};

// Função para visualizar relatórios financeiros
export const getFinancialReport = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const expenses = await Expense.find({ userId });
        const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

        res.status(200).json({ totalExpenses, expenses });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao gerar relatório financeiro', error });
    }
};