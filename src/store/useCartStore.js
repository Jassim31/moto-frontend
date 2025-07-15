import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useCartStore = create((set) => ({
    cart : [] ,
    loading : false,

// add to cart

addToCart : async(cart) => {
    try {
        const res = await axiosInstance.post('/add/cart',cart)
        console.log(res)
        alert("product added to the cart succesfully")
    } catch (error) {
        alert(error.response.data.message)
    }
},


// get cart

getCart : async()=>{
    try {
        const response = await axiosInstance.get('/get/cart')
        set({cart : response.data})
    } catch (error) {
        alert(error.response.data.message)
    }
},

}))



