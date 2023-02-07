import React, { createContext, useContext, useState, useEffect } from 'react';
import Types from 'mongoose';

type authData = {
    isAuth: {
        id: Types.ObjectId,
        username: string,
        email: string
    },
    login: () => void,
    logout: () => void
}

type contextChildren = {
    children: React.ReactElement
}

const AuthContext = createContext<any>(undefined);

export const AuthorizationContext = ({ children }: contextChildren) => {
    const [authData, setAuthData] = useState<authData | null>(null);

    useEffect(() => {
        const getLoggedUser = async () => {
            try {
                const response = await fetch('/userdata', {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json'
                    },
                    credentials: 'include'
                });
                const data = await response.json();
                if (response.ok) {
                    setAuthData(data);
                    return data;
                } else {
                    console.error(data);
                }
            } catch (error) {
                console.error(error);
                return null;
            }
        }
        getLoggedUser();
    }, []);

    const onLogin = (data: authData) => setAuthData(data);

    const onLogout = () => setAuthData(null);

    return (
        <AuthContext.Provider value={{ authData, onLogin, onLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UseAuthentication = () => useContext(AuthContext); 
