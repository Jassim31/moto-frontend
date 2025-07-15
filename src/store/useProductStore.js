import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useProductStore = create((set)=>({
    products : [],
    loading: false,

// get product

    getProduct : async() =>{
        try {
            const response = await axiosInstance.get('get/products')
            set({products : response.data})
        } catch (error) {
            alert(error.response.data.message)
        }
    },

// add product

    addProduct : async(product) => {
      try {
          const res = await axiosInstance.post('add/product',product)
          console.log(res);
          
          alert("Product added successfully")
      } catch (error) {
         alert(error.response.data.message)
      }

    },

// edit product

    editProduct : async(product,id) =>{
        try {
            await axiosInstance.put(`edit/product/${id}`,product)
            alert("Product updated")
        } catch (error) {
            alert(error.response.data.message)
        }
    },

// delete product

    deleteProduct: async(id) =>{
        try {
            await axiosInstance.delete(`product/delete/${id}`)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

}))

