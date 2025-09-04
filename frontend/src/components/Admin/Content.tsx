import React, { useEffect, useState } from 'react';
import { fetchContent, deleteContent } from '../../../utils/api';

const Content = () => {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        const loadContents = async () => {
            const data = await fetchContent();
            setContents(data);
        };
        loadContents();
    }, []);

    const handleDelete = async (id) => {
        await deleteContent(id);
        setContents(contents.filter(content => content.id !== id));
    };

    return (
        <div>
            <h1>Gerenciamento de Conteúdos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {contents.map(content => (
                        <tr key={content.id}>
                            <td>{content.title}</td>
                            <td>{content.description}</td>
                            <td>
                                <button onClick={() => handleDelete(content.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Content;