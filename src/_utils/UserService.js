import Axios from "./Axios";

const getUserData = () => {
    return Axios.post('/user/profile')
}

const updateUserName = (userName) => {
    return Axios.put('/user/profile', {'userName':userName})
}

export const userService = {
    getUserData, updateUserName
}