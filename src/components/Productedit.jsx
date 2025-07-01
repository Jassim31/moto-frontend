import React, { useState } from 'react'
import { useProductStore } from '../store/useProductStore'

export default function Productedit({item}) {
    
    const {editProduct} =useProductStore()
    const [product,setProduct]= useState({
        image:item.image,price:item.price ,category:item.category ,name:item.name,description:item.description
    })
    const handleEdit = async(e)=>{
        e.preventDefault()
        if(!product.image || !product.price || !product.category || !product.name || !product.description){
            alert("All fields are required")
        }else{
            const formData = new FormData();
            formData.append('name', product.name);
            formData.append('price', product.price);
            formData.append('image', product.image);
            formData.append('description', product.description);
            formData.append('category', product.category)

            await editProduct(formData,item._id)
            
        }
    }

    console.log(product);
    
  return (
    <div>

     <div>
  {/* Button trigger modal */}
  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${item._id}`}>
    Edit
  </button>
  {/* Modal */}
  <div className="modal fade" id={item._id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
         
<div className=" d-flex justify-content-center mt-5 ms-5 me-5 mb-5 border p-5">
        <form action="" className="text">
          <div className="mb-3">
            Edit product image:
                        <label htmlFor="">{product.image}</label>

            <input type="file"   onChange={(e)=>setProduct({...product,image:e.target.files[0]})} />
          </div>
          <div className="mb-3">
            Edit price: 
            <input type="text" value={product.price}  onChange={(e)=>setProduct({...product,price:e.target.value})} />
          </div>
          <div className="mb-3">
            Edit category: 
            <input type="text" value={product.category} onChange={(e)=>setProduct({...product,category:e.target.value})} />
          </div>
          <div className="mb-3">
            {" "}
            <label>
              Edit the product name:
              <input type="text" value={product.name} onChange={(e)=>setProduct({...product,name:e.target.value})} />
            </label>
          </div>

          <div className="mb-3">
            <label>
              Edit the product description:
              <input type="text" value={product.description} onChange={(e)=>setProduct({...product,description:e.target.value})} />
            </label>
          </div>
        </form>
      </div>


        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" onClick={(e)=>handleEdit(e)}>Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
