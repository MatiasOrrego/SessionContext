import React, { createContext, useState } from 'react';

// Crear el contexto de sesión
export const SessionContext = createContext();

// Implementar el SessionProvider
export const SessionProvider = ({ children }) => {
    const [session, setSession] = useState({ isAuthenticated: false, user: null });

    // Función para iniciar sesión
    const login = async (username, password) => {
        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            if (response.ok) {
                setSession({ isAuthenticated: true, user: data });
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            return { error: error.message };
        }
    };

    // Función para cerrar sesión
    const logout = () => {
        setSession({ isAuthenticated: false, user: null });
    };

    return (
        <SessionContext.Provider value={{ session, login, logout }}>
            {children}
        </SessionContext.Provider>
    );
};