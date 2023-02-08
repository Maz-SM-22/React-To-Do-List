import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { UseAuthentication } from './AuthorizationContext';

export const LoginForm = () => {
    const navigate = useNavigate();
    const authenication = UseAuthentication();
    const onLogin = authenication?.onLogin;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<Error | null>(null);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const response = await fetch('/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'email': email,
                    'password': password
                })
            })
            if (!response.ok) {
                throw new Error(response.statusText);
            } else {
                const data = await response.json();
                if (onLogin) onLogin({
                    id: data.id,
                    username: data.username,
                    email: data.email
                });
                return navigate('/tasks', { replace: true });
            }
        } catch {
            setError(error);
            console.error(error);
        }
    }

    return (
        <div className="container">
            <h2>To-Do List</h2>
            <form>
                <div className="form-item">
                    <input
                        type="email"
                        name="email"
                        placeholder='email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <input
                        type="password"
                        name="password"
                        placeholder='password'
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}
