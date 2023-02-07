import React from 'react'

type ErrorProps = {
    error: Error | undefined
}

export const ErrorPage = ({ error }: ErrorProps) => {
    return (
        <div className='container'>
            {error && (
                <>
                    <h1>Uhoh!</h1>
                    <p>Looks like there was an error handling your request</p>
                    <h2>Error: {error.message}</h2>
                    <a href="/" id="return-btn" className="button">Return to home page</a>
                </>
            )}
        </div>
    )
}
