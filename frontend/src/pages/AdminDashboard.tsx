import React, { useEffect, useState } from 'react';
import { getUsers, getPayments, getContent, getMetrics } from '../utils/api';
import Users from '../components/Admin/Users';
import Payments from '../components/Admin/Payments';
import Content from '../components/Admin/Content';
import Metrics from '../components/Admin/Metrics';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [payments, setPayments] = useState([]);
    const [content, setContent] = useState([]);
    const [metrics, setMetrics] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const usersData = await getUsers();
            const paymentsData = await getPayments();
            const contentData = await getContent();
            const metricsData = await getMetrics();

            setUsers(usersData);
            setPayments(paymentsData);
            setContent(contentData);
            setMetrics(metricsData);
        };

        fetchData();
    }, []);

    return (
        <div className="admin-dashboard">
            <h1>Painel Administrativo</h1>
            <Users users={users} />
            <Payments payments={payments} />
            <Content content={content} />
            <Metrics metrics={metrics} />
        </div>
    );
};

export default AdminDashboard;