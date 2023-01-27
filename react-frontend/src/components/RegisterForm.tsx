import React, { useState } from 'react'

export const RegisterForm = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<Error | null>(null);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/user/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'username': username,
                    'email': email,
                    'password': password
                })
            });
            const data = await response.json();
            if (response.ok) {
                console.log(data);
            } else {
                console.error(data);
            }
        } catch {
            setError(error);
            console.error(error);
        }
    }

    return (
        <div className="container">
            <h2>To-Do List</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-item">
                    <label htmlFor="username">Username:</label>
                </div>
                <div className="form-item">
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="email">Email:</label>
                </div >
                <div className="form-item">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="password">Password:</label>
                </div >
                <div className="form-item">
                    <input
                        type="password"
                        name="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Register</button>
            </form >
        </div >
    )
}
