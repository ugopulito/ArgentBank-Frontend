import React from 'react';
import '../pages/_Pages.css'
import Form from '../components/Form';

const SignIn = () => {
    return (
        <main className='sign-in main bg-dark'>
            <section className='sign-in-content'>
                <span className="nav-item-icon material-symbols-outlined">account_circle</span>
                <h1>Sign In</h1>
                <Form/>
            </section>
        </main>
    );
};

export default SignIn;