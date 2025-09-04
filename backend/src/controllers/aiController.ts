import { Request, Response } from 'express';
import { aiService } from '../services/aiService';

// Função para gerar insights financeiros
export const generateInsights = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const insights = await aiService.getInsights(userId);
        res.status(200).json(insights);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao gerar insights', error });
    }
};

// Função para sugerir estratégias financeiras
export const suggestStrategies = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const strategies = await aiService.getFinancialStrategies(userId);
        res.status(200).json(strategies);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao sugerir estratégias', error });
    }
};

// Função para processar dados financeiros
export const processFinancialData = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const financialData = req.body;
        const processedData = await aiService.processData(userId, financialData);
        res.status(200).json(processedData);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao processar dados financeiros', error });
    }
};