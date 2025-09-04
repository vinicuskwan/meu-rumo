import React, { useEffect, useState } from 'react';
import { fetchMetrics } from '../../utils/api';

const Metrics: React.FC = () => {
    const [metrics, setMetrics] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getMetrics = async () => {
            try {
                const data = await fetchMetrics();
                setMetrics(data);
            } catch (err) {
                setError('Erro ao carregar métricas');
            } finally {
                setLoading(false);
            }
        };

        getMetrics();
    }, []);

    if (loading) {
        return <div>Carregando métricas...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Métricas de Uso da Plataforma</h2>
            <ul>
                {metrics && metrics.map((metric: any, index: number) => (
                    <li key={index}>
                        {metric.name}: {metric.value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Metrics;