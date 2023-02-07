import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { UseAuthentication } from './AuthorizationContext';

export const RegisterForm = () => {
    const navigate = useNavigate();
    const authentication = UseAuthentication();
    const onLogin = authentication?.onLogin;
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<Error | null>(null);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const response = await fetch('/user/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'username': username,
                    'email': email,
                    'password': password
                })
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(response.statusText);
            } else {
                if (onLogin) onLogin({
                    id: data.id,
                    username: data.username,
                    email: data.email
                })
                navigate('/tasks', { replace: true });
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
                        type="text"
                        name="username"
                        placeholder='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <input
                        type="email"
                        name="email"
                        placeholder='email'
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
                <button type="submit" onClick={handleSubmit}>Register</button>
            </form >
        </div >
    )
}
