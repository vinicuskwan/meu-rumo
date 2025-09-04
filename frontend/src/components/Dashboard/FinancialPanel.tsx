import React from 'react';
import { useEffect, useState } from 'react';
import { fetchFinancialData } from '../../utils/api';

const FinancialPanel = () => {
    const [financialData, setFinancialData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getFinancialData = async () => {
            try {
                const data = await fetchFinancialData();
                setFinancialData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getFinancialData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="financial-panel">
            <h2>Financial Overview</h2>
            <div>
                <h3>Expenses</h3>
                <ul>
                    {financialData.expenses.map(expense => (
                        <li key={expense.id}>{expense.description}: ${expense.amount}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Income</h3>
                <ul>
                    {financialData.income.map(income => (
                        <li key={income.id}>{income.source}: ${income.amount}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Total Balance</h3>
                <p>${financialData.totalBalance}</p>
            </div>
        </div>
    );
};

export default FinancialPanel;