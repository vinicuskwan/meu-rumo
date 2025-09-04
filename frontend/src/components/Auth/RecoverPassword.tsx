import React, { useState } from 'react';

const RecoverPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRecoverPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await fetch('/api/auth/recover-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setMessage('Instruções de recuperação de senha enviadas para o seu e-mail.');
            } else {
                setMessage('Erro ao enviar instruções. Verifique se o e-mail está correto.');
            }
        } catch (error) {
            setMessage('Erro ao conectar ao servidor. Tente novamente mais tarde.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="recover-password">
            <h2>Recuperar Senha</h2>
            <form onSubmit={handleRecoverPassword}>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Enviando...' : 'Enviar Instruções'}
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default RecoverPassword;