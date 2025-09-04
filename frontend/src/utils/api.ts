import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Altere para o URL do seu backend

// Função para fazer requisições GET
export const getRequest = async (endpoint) => {
    try {
        const response = await axios.get(`${API_BASE_URL}${endpoint}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Erro ao fazer a requisição');
    }
};

// Função para fazer requisições POST
export const postRequest = async (endpoint, data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}${endpoint}`, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Erro ao fazer a requisição');
    }
};

// Função para fazer requisições PUT
export const putRequest = async (endpoint, data) => {
    try {
        const response = await axios.put(`${API_BASE_URL}${endpoint}`, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Erro ao fazer a requisição');
    }
};

// Função para fazer requisições DELETE
export const deleteRequest = async (endpoint) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}${endpoint}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Erro ao fazer a requisição');
    }
};