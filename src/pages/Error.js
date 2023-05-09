import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <main className='error main'>
            <div className='error-message'>
                <p>This page doesn't exist.</p>
                <p>Go back to <Link to='/'>Homepage</Link></p>
            </div>
        </main>
    );
};

export default Error;