import React from 'react';

export const Homepage = () => {

    const handleClick = (event: any) => {
        event.preventDefault();
        const button = event.target as HTMLAnchorElement;
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
