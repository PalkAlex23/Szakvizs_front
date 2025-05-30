import axios from 'axios'

export const myAxios = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: false,
});

export default axios