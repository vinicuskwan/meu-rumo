// Este arquivo contém funções utilitárias gerais para a aplicação.

// Função para formatar valores monetários
export const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
};

// Função para calcular a porcentagem
export const calculatePercentage = (part: number, total: number): number => {
    return (part / total) * 100;
};

// Função para validar se um valor é um número
export const isNumber = (value: any): boolean => {
    return !isNaN(value) && !isNaN(parseFloat(value));
};

// Função para gerar um ID único
export const generateUniqueId = (): string => {
    return 'id-' + Math.random().toString(36).substr(2, 16);
};