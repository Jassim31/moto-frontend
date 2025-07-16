import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/useProductStore';
import { baseURL } from '../lib/baseURL';
import Productedit from './Productedit';

export default function Products() {
  const {getProduct,products,deleteProduct} = useProductStore()

  useEffect(()=>{
    getProduct()
  },[])
 
  // console.log(products);
  const handleDelete = async(id)=>{
    await deleteProduct(id)
    getProduct()
  }

  return (
    <div>
      <div className=''>
        <ul class="nav justify-content-end">
          <div>
           <div>
              <li class="nav-item">
                <Link to="/productadd">ADD</Link>
              </li>
           </div>
          </div>
         
          <li class="nav-item">
           
             <Link to="/producthidden"> HIDDEN</Link>
          
          </li>
        </ul>
      </div>
      <div className="container row">
       { products.map((product)=>(
        <div className="col">
          <div className="card " style={{ width: "18rem" }}>
            <img  src={`${baseURL}/uploads/${product.image}`} className="card-img-top productThumbnail " alt={product.image} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">
                {product.description}
              </p>
              <h5>{product.price}</h5>
              <a href="#" className="btn btn-primary">
                View
              </a>
               <Productedit item={product}/>
             <button className="btn btn-primary" onClick={()=>handleDelete(product._id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
       ))
        
        }

        
      </div>
    </div>
  );
}
