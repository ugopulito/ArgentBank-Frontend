import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <main className='main'>
            <div className='not-found'>
                <p className='not-found_code'>404</p>
                <p className='not-found_message'>This page doesn't exist.</p>
                <p>Go back to <Link to='/'>Homepage</Link></p>
            </div>
        </main>
    );
};

export default NotFound;