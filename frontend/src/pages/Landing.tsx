import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'; // Importando estilos específicos para a página

const Landing = () => {
    return (
        <div className="landing-container">
            <header className="landing-header">
                <h1>Bem-vindo ao Meu Rumo</h1>
                <p>Gerencie suas finanças pessoais com a ajuda da inteligência artificial.</p>
            </header>
            <main className="landing-main">
                <section className="landing-features">
                    <h2>Recursos Principais</h2>
                    <ul>
                        <li>Controle de gastos e receitas</li>
                        <li>Análises financeiras personalizadas</li>
                        <li>Desafios para melhorar sua saúde financeira</li>
                    </ul>
                </section>
                <section className="landing-cta">
                    <h2>Comece Agora</h2>
                    <Link to="/register" className="cta-button">Cadastre-se</Link>
                    <Link to="/login" className="cta-button">Login</Link>
                </section>
            </main>
            <footer className="landing-footer">
                <p>&copy; 2023 Meu Rumo. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};

export default Landing;