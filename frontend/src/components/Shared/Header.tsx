import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <div className="logo">
                <h1>Meu Rumo</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Início</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/profile">Perfil</a></li>
                    <li><a href="/admin">Admin</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;