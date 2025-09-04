import axios from 'axios';

const AI_API_URL = 'https://api.example.com/ai'; // Substitua pela URL real da API de IA
const API_KEY = process.env.AI_API_KEY; // Certifique-se de que a chave da API está definida nas variáveis de ambiente

export const getAIInsights = async (userData) => {
    try {
        const response = await axios.post(`${AI_API_URL}/insights`, userData, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao obter insights da IA:', error);
        throw new Error('Não foi possível obter insights da IA');
    }
};

export const generateFinancialPlan = async (userData) => {
    try {
        const response = await axios.post(`${AI_API_URL}/financial-plan`, userData, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao gerar plano financeiro:', error);
        throw new Error('Não foi possível gerar o plano financeiro');
    }
};

// Adicione outras funções conforme necessário para interagir com a API de IA.