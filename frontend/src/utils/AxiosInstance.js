import axios from "axios";

// Axios global settings

const API_BASE_URL = 'https://ecommce-be.herokuapp.com/ecomm/api/v1'

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Axios'] = 'application/json';


export const AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 20000,
})