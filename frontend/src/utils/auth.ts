import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, { email, password });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Login failed');
    }
};

export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Registration failed');
    }
};

export const recoverPassword = async (email) => {
    try {
        const response = await axios.post(`${API_URL}/auth/recover`, { email });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Password recovery failed');
    }
};

export const logout = () => {
    localStorage.removeItem('token');
};