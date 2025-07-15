import React, { useEffect } from 'react'
import { useCartStore } from '../store/useCartStore';
import { baseURL } from '../lib/baseURL';
import './Products.css'
import { Link } from 'react-router-dom';

export default function Cart() {
  const {getCart ,cart } = useCartStore()

  useEffect(()=>{
    getCart()
  },[])
  console.log(cart);
  
  return (
  <div>
   { 
   cart?.products?.length <=0 ? 
      <p className='m-5 text-center fs-1'>Cart is Empty</p>:
    <>
      <div className="container-row">
         {
           cart?.products?.map((product)=>(
           <div className="col">
            <div className="card ">
             
                <img
                  src={`${baseURL}/uploads/${product.productId.image}`}
                  alt={product.productId.image}
                  className="card-img-top productThumbnail w-25"
                />
              
              <div className="card-body">
                <h2 className="card-title">{product.productId.name}</h2>
                <p>
                 {product.productId.description}
                </p>
                 <h5>{product.productId.price}</h5>
               
              </div>
            </div>
          </div>
           )) 
         }
         
      </div>
  
  <div>
  
    <Link to={"/Checkout"} className="hidelink color">
                         <button> checkout</button></Link>
                        
      
  </div>
    </>}

    </div>
  );
}
