import React from 'react';
import FinancialPanel from '../components/Dashboard/FinancialPanel';
import Insights from '../components/Dashboard/Insights';
import Challenges from '../components/Dashboard/Challenges';
import Graphs from '../components/Dashboard/Graphs';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <h1>Painel do Usuário</h1>
            <FinancialPanel />
            <Insights />
            <Challenges />
            <Graphs />
        </div>
    );
};

export default Dashboard;