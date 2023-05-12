import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { authServices } from '../_utils/AuthServices';
import { useDispatch, useSelector } from 'react-redux';
import { savePassword } from '../redux';

const Form = () => {
    const userStore = useSelector(state => state.User);
    const dispatch = useDispatch();
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
        dispatch({
            type:'User/'+e.target.name,
            payload: e.target.value
        })
    }
    const mail = 'email'
    const getRemember = () => {
        setRemember(!remember);
        dispatch({
            type:'User/'+mail,
            payload: credentials.email
        })
        dispatch(savePassword(credentials.password));
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
        <form onSubmit={login} autoComplete='off'>
            <div className='input-wrapper'>
                <label htmlFor='email'>Username</label>
                <input onChange={onChange} type='email' name='email' value={userStore.email} required/>
            </div>
            <div className='input-wrapper'>
                <label htmlFor='password'>Password</label>
                <input onChange={onChange} type='password' name='password' value={credentials.password} required/>
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