import axios from "axios";

const BASE_URL = "http://localhost:8085/EPMSpring/";

export const endpoints = {
    "user-login": "api/login"
}

export const authApi = () => {
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            "Authorization": ""
        }
    })
}

export default axios.create({
    baseURL: BASE_URL
})
