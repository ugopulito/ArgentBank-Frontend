import React, { useState } from 'react';
import axios from 'axios';

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
        ((username !== '' && password !== '') ? 
         /* console.log('Username : ' + username + ' | Password : ' + password + ' | Remember me : ' + remember) */ 
         axios.post('http://localhost:3001/api/v1/user/login', {
            'email': username,
            'password': password
          })
          .then(function (response) {
              console.log('status : '+response.data.status+', message : '+response.data.message);
              console.log(response.data.body);
          })
          .catch(function (error) {
            console.log(error.response.data);
          })
         : console.error('l\'utilisateur et/ou le mot de passe ne peuvent être vides !'))
        
    }

    return (
        <form>
            <div className='input-wrapper'>
                <label htmlFor='username'>Username</label>
                <input onChange={getUsername} type='email' id='username'/>
            </div>
            <div className='input-wrapper'>
                <label htmlFor='password'>Password</label>
                <input onChange={getPassword} type='password' id='password'/>
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