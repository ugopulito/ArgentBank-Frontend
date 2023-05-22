import Axios from "./Axios";

const getUserData = () => {
    return Axios.post('/user/profile')
}

export const userService = {
    getUserData
}