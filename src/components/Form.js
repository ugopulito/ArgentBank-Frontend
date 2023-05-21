import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { authServices } from '../_utils/AuthServices';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials, saveUserData } from '../redux';

const Form = () => {
    const authStore = useSelector(state => state.Auth);
    const dispatch = useDispatch();
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();
    const onChange = (e) => {
        dispatch(setCredentials({name: e.target.name, value: e.target.value}))
    }
    const getRemember = () => {
        setRemember(!remember);
    }
    
    const login = (e) => {
        e.preventDefault();
        ((authStore.email !== '' && authStore.password !== '') ? 
        //Requête d'authentification
         authServices.login(authStore)
          .then((response) => {
            authServices.setToken(response.data.body.token);
                //Requête de récupération d'infos client
                axios.post(
                    'http://localhost:3001/api/v1/user/profile',
                    {data: ''},
                    {headers: {'Authorization': `Bearer ${response.data.body.token}`}}
                )
                .then((user) => {
                    for(let i in user.data.body){
                        dispatch(saveUserData({name: i, value: user.data.body[i]}))
                        console.log(i + ' : ' + user.data.body[i]);
                    }
                })
                .catch((error) => {
                    console.log(error.response.data);
                })
            navigate('/user');
          })
          .catch((error) => {
            console.log(error.response.data);
          })

         : console.error('l\'utilisateur et/ou le mot de passe ne peuvent être vides !'))
        
    }

    return (
        <form onSubmit={login} autoComplete='off'>
            <div className='input-wrapper'>
                <label htmlFor='email'>Username</label>
                <input onChange={onChange} type='email' name='email' value={authStore.email} required/>
            </div>
            <div className='input-wrapper'>
                <label htmlFor='password'>Password</label>
                <input onChange={onChange} type='password' name='password' value={authStore.password} required/>
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