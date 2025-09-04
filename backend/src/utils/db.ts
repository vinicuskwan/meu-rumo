import { createConnection } from 'mysql2/promise';

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'meu_rumo',
};

export const connectToDatabase = async () => {
    try {
        const connection = await createConnection(dbConfig);
        console.log('Conexão ao banco de dados estabelecida com sucesso!');
        return connection;
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        throw error;
    }
};

export const closeDatabaseConnection = async (connection) => {
    try {
        await connection.end();
        console.log('Conexão ao banco de dados encerrada.');
    } catch (error) {
        console.error('Erro ao encerrar a conexão com o banco de dados:', error);
    }
};