import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { authServices } from '../_utils/AuthServices';

const Form = () => {
    const [credentials, setCredentials] = useState({
        email:'',
        password:''
    });
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();
    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }
    const getRemember = () => {
        setRemember(!remember);
    }
    
    const login = (e) => {
        e.preventDefault();
        ((credentials.email !== '' && credentials.password !== '') ? 

         axios.post('http://localhost:3001/api/v1/user/login', credentials)
          .then(function (response) {
              authServices.setToken(response.data.body.token);
              navigate('/user');
          })
          .catch(function (error) {
            console.log(error.response.data);
          })

         : console.error('l\'utilisateur et/ou le mot de passe ne peuvent être vides !'))
        
    }

    return (
        <form onSubmit={login}>
            <div className='input-wrapper'>
                <label htmlFor='email'>Username</label>
                <input onChange={onChange} type='email' name='email' value={credentials.email}/>
            </div>
            <div className='input-wrapper'>
                <label htmlFor='password'>Password</label>
                <input onChange={onChange} type='password' name='password' value={credentials.password}/>
            </div>
            <div className='input-remember'>
                <input onClick={getRemember} type='checkbox' id='remember-me'/>
                <label htmlFor='remember-me'>Remember me</label>
            </div>
            <button className='sign-in-button'>Sign In</button>
        </form>
    );
};

export default Form;