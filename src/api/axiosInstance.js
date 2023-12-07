import axios from 'axios';

export const createAxios = axios.create({
    baseURL: "http://localhost:5000",
    timeout: 10000,
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': `http://localhost:5000`,
        'Content-Type': 'application/json',
    }
});