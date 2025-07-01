import React, { useState } from 'react'
import { useProductStore } from '../store/useProductStore'

export default function Productadd() {
  const {addProduct} = useProductStore()
  const [product,setProduct] = useState({
    image:'', price:'', name:'', description:'', category:''

  })
console.log(product);

// add product

  const handleAdd = async(e)=>{
    e.preventDefault()
    if(!product.image || !product.price || !product.name || !product.description || !product.category){
      alert("All fields are required")
    }
    else{
       const formData = new FormData();
        formData.append('name', product.name);
        formData.append('price', product.price);
        formData.append('image', product.image);
        formData.append('description',product.description)
        formData.append('category',product.category) 
      await addProduct(formData)
      
    }
  }
  
  return (
    <div className="">
      <div className="bg-danger text-center">
        <h1>Add new Product</h1>
      </div>
      <div className=" d-flex justify-content-center mt-5 ms-5 me-5 mb-5 border p-5">
        <form action="" className="text">
          <div className="mb-3">
            insert product image:
            <input type="file" onChange={(e)=>setProduct({...product,image:e.target.files[0]})} />
          </div>
          <div className="mb-3">
            price: 
            <input type="text" onChange={(e)=>setProduct({...product,price:e.target.value})} />
          </div>
          <div className="mb-3">
            category: 
            <input type="text" onChange={(e)=>setProduct({...product,category:e.target.value})} />
          </div>
          <div className="mb-3">
            {" "}
            <label>
              Enter the product name:
              <input type="text" onChange={(e)=>setProduct({...product,name:e.target.value})} />
            </label>
          </div>

          <div className="mb-3">
            <label>
              Enter the product description:
              <input type="text" onChange={(e)=>setProduct({...product,description:e.target.value})} />
            </label>
          </div>
          <div className="text-center">
            <button onClick={(e)=>handleAdd(e)}>SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}
