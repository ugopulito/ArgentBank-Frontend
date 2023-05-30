import { useNavigate } from 'react-router-dom';
import { authServices } from './AuthServices';

const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    if(!authServices.isLogged()){
        navigate('/sign-in')
    }
    return children
};

export default AuthProvider;