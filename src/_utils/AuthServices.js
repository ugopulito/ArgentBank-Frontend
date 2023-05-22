import Axios from "./Axios"

const login = (credentials) => {
    return Axios.post('/user/login', credentials)
}

const setToken = (token) => {
    localStorage.setItem('token', token)
}

const getToken = () => {
    return localStorage.getItem('token')
}
    
const logout = () => {
    localStorage.removeItem('token')    
}

const isLogged = () => {
    let token = localStorage.getItem('token');
    return !!token
}

export const authServices = {
    login, setToken, getToken, logout, isLogged
}