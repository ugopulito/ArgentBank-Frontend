import React, { useState } from 'react';

const Form = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const getUsername = (e) => {
        setUsername(e.target.value);
    }
    const getPassword = (e) => {
        setPassword(e.target.value);
    }
    const getRemember = (e) => {
        setRemember(!remember);
    }

    const signIn = (event) => {
        event.preventDefault();
        ((username !== '' && password !== '') ? console.log('Username : ' + username + ' | Password : ' + password + ' | Remember me : ' + remember) : console.error('utilisateur ou mot de passe incorrect !'))
        
    }

    return (
        <form>
            <div className='input-wrapper'>
                <label htmlFor='username'>Username</label>
                <input onChange={getUsername} type='email' id='username' required/>
            </div>
            <div className='input-wrapper'>
                <label htmlFor='password'>Password</label>
                <input onChange={getPassword} type='password' id='password' required/>
            </div>
            <div className='input-remember'>
                <input onClick={getRemember} type='checkbox' id='remember-me'/>
                <label htmlFor='remember-me'>Remember me</label>
            </div>
            <button onClick={signIn} className='sign-in-button'>Sign In</button>
        </form>
    );
};

export default Form;