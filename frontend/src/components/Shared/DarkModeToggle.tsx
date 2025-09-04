import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('dark-mode');
        return savedMode === 'true' || false;
    });

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    useEffect(() => {
        localStorage.setItem('dark-mode', isDarkMode);
        document.body.classList.toggle('dark-mode', isDarkMode);
    }, [isDarkMode]);

    return (
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
        </button>
    );
};

export default DarkModeToggle;