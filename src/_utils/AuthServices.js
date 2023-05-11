const setToken = (token) => {
    localStorage.setItem('token', token)
}
    
const logout = () => {
    localStorage.removeItem('token')    
}

const isLogged = () => {
    let token = localStorage.getItem('token');
    return !!token
}

export const authServices = {
    setToken, logout, isLogged
}