import { useNavigate } from 'react-router-dom';
import { authServices } from '../_utils/AuthServices';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../redux';
import { useState } from 'react';

const Form = () => {
    const authStore = useSelector(state => state.Auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const onChange = (e) => {
        dispatch(setCredentials({name: e.target.name, value: e.target.value}));
        setErrorMessage('')
    }

    
    const login = (e) => {
        e.preventDefault();
        ((authStore.email !== '' && authStore.password !== '') ? 
        //Requête d'authentification
         authServices.login(authStore)
          .then((response) => {
            authServices.setToken(response.data.body.token);
            navigate('/user');
          })
          .catch((error) => {
            (error.response.data.status < 500 ? setErrorMessage('Wrong username or password.') : setErrorMessage('Network error. Please try again later'))
          })

         : setErrorMessage('l\'utilisateur et/ou le mot de passe ne peuvent être vides !'))
        
    }

    return (
        <>
        <form onSubmit={login}>
            <div className='input-wrapper'>
                <label htmlFor='email'>Username</label>
                <input onChange={onChange} type='email' id='email' name='email' value={authStore.email} autoComplete='off' required/>
            </div>
            <div className='input-wrapper'>
                <label htmlFor='password'>Password</label>
                <input onChange={onChange} type='password' id='password' name='password' value={authStore.password} autoComplete='off' required/>
            </div>
            <div className='input-remember'>
                <input type='checkbox' id='remember-me'/>
                <label htmlFor='remember-me'>Remember me</label>
            </div>
            <button className='sign-in-button'>Sign In</button>
        </form>
        {errorMessage && <p className='error'>{errorMessage}</p>}
        </>
    );
};

export default Form;