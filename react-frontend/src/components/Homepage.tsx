import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Homepage = () => {
    const navigate = useNavigate();

    const handleClick = (event: any) => {
        event.preventDefault();
        const button = event.target as HTMLAnchorElement;
        navigate(`/${button.id}`);
    }

    return (
        <div className="container">
            <h2>To-Do List</h2>
            <a
                id="login"
                href='/login'
                className="button"
                onClick={handleClick}
            >Login</a>
            <a
                id="register"
                href='/register'
                className="button"
                onClick={handleClick}
            >Register</a>
        </div>
    )
}
