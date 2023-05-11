import React from 'react';
import { Navigate } from 'react-router-dom';
import { authServices } from './AuthServices';

const AuthProvider = ({children}) => {
    if(!authServices.isLogged()){
        return <Navigate to='/sign-in'/>
    }
    return children
};

export default AuthProvider;