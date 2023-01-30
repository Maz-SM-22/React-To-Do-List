import React, { useState, useEffect } from 'react'

export const LoginForm = () => {
    const [email, setEmail] = useState<any>(null);
    const [password, setPassword] = useState<any>(null);
    const [error, setError] = useState<Error | null>(null);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'email': email,
                    'password': password
                })
            })
            // Not sure if this is necessary cos login is not returning a JSON
            const data = await response.json();
            if (response.ok) {
                console.log(data);
                // redirect to home page 
            } else {
                console.error(data);
                // redirect to error message page 
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
                    <label htmlFor="email">Email:</label>
                </div>
                <div className="form-item">
                    <input
                        type="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="password">Password:</label>
                </div>
                <div className="form-item">
                    <input
                        type="password"
                        name="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
