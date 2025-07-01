import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL:"http://localhost:4001",
    withCredentials: true  // to automatically send cookies
})