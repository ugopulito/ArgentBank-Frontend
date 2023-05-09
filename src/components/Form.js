import React from 'react';

const Form = () => {
    return (
        <form>
            <div className='input-wrapper'>
                <label htmlFor='username'>Username</label>
                <input type='email' id='username'/>
            </div>
            <div className='input-wrapper'>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password'/>
            </div>
            <div className='input-remember'>
                <input type='checkbox' id='remember-me'/>
                <label htmlFor='remember-me'>Remeber me</label>
            </div>
            <button className='sign-in-button'>Sign In</button>
        </form>
    );
};

export default Form;