import axios from "axios";
import cookies from "react-cookies"
const BASE_URL = "http://localhost:8080/EPMWebSpring/";

export const endpoints = {
    "user-login": "api/user/login",
    'current-user': "api/user/current-user"
}

export const authApi = () => {
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            "Authorization": cookies.load('token')
        }
    })
}

export default axios.create({
    baseURL: BASE_URL
})
