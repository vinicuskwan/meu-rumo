import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Meu Rumo. Todos os direitos reservados.</p>
                <ul className="footer-links">
                    <li><a href="/privacy-policy">Política de Privacidade</a></li>
                    <li><a href="/terms-of-service">Termos de Serviço</a></li>
                    <li><a href="/contact">Contato</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;