import React, { useEffect } from 'react'
import { useProductStore } from '../store/useProductStore';
import { baseURL } from '../lib/baseURL';
import { useCartStore } from '../store/useCartStore';

export default function Spare() {
  const {getProduct,products} = useProductStore()
  useEffect(()=>{
    getProduct()
  },[])

  const {addToCart} = useCartStore()
 

  const handleAdd = async(id) => {
    await addToCart({ productId:id,quantity:1})
    
  }

  return (
    <div>
      <div className="container row " style={{marginBottom:"400px"}}>
        <div className="row">
          {products.map((product)=>(
          <div className="col">
            <div className="productThumbnail" style={{ width: "18rem" }}>
              <div className="card bg-base-100  shadow-sm ">
               
                  <img
                    src={`${baseURL}/uploads/${product.image}`}
                    
                    alt={product.image} height={"300px"}
                  />
              
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{product.name}</h2>
                  <p>
                    {product.description}
                  </p>
                    <h5>{product.price}</h5>
                    <button className="btn btn-primary">Buy Now</button>
                  <div>
                    <button className="btn btn-primary" onClick={()=>handleAdd(product._id)}>Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>  
  ))
  }
  </div>
      </div>
    </div>
  );
}
