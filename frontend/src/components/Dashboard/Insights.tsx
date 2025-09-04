import React, { useEffect, useState } from 'react';
import { fetchInsights } from '../../utils/api';

const Insights: React.FC = () => {
    const [insights, setInsights] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getInsights = async () => {
            try {
                const data = await fetchInsights();
                setInsights(data);
            } catch (err) {
                setError('Erro ao carregar insights');
            } finally {
                setLoading(false);
            }
        };

        getInsights();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Insights Financeiros</h2>
            <ul>
                {insights.map((insight, index) => (
                    <li key={index}>{insight}</li>
                ))}
            </ul>
        </div>
    );
};

export default Insights;