import React from 'react';
import { Line } from 'react-chartjs-2';

const Graphs = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Gastos',
                data: data.expenses,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
            {
                label: 'Receitas',
                data: data.income,
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Desempenho Financeiro</h2>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default Graphs;