import axios from "axios";
import { authServices } from "./AuthServices";

const Axios = axios.create({
    baseURL: 'http://localhost:3001/api/v1'
})

Axios.interceptors.request.use(request => {
    request.headers.Authorization = 'Bearer ' + authServices.getToken();
    return request
})

Axios.interceptors.response.use(response => {
    return response
}, error => {
    if(error.response.status === 401){
        authServices.logout()
        window.location = '/sign-in' 
    }
})

export default Axios