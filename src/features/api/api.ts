import axios, { AxiosRequestConfig } from 'axios';


const configs: AxiosRequestConfig = {
    baseURL: '/api',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
}
const api = axios.create(configs);

export default api;