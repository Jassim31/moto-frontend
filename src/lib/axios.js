import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL:"https://motogaragebackend-5.onrender.com",
    withCredentials: true  // to automatically send cookies
})