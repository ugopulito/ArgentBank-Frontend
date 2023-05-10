import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthProvider = ({children}) => {
    let logged = false; 
    if(!logged){
        return <Navigate to='/sign-in'/>
    }
    return children
};

export default AuthProvider;