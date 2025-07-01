import { create } from 'zustand'
import { axiosInstance } from '../lib/axios'

export const useAuthStore = create((set)=>({
    authUser : null,
    loading: false,

    checkAuth: async ()=>{
        try{
            const res = await axiosInstance.get("/check");
            set({authUser: res.data})
        }
        catch (error){
            set({authUser: null});
        }
    },

    signup: async(user)=>{
        try {
            const response = await axiosInstance.post('/register',user)
            set({authUser : response.data})
            alert("Account created")
        } catch (error) {
            alert(error.response.data.message)
            set({authUser: null})
        }
    },
    login: async(user)=>{
        try {
            const response = await axiosInstance.post('/login',user)
            set({authUser : response.data})
            alert("Login successfully")
        } catch (error) {
            alert(error.response.data.message)
            set({authUser: null})
        }
    },
    logout: async()=>{
        try {
            await axiosInstance.post("/logout");
            set ({authUser:null });
            alert.success("Logout successfully");
        }
        catch (error)
        {
            alert.error(error.response.data.message);
        }
    }
}))