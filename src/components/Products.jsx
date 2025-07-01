import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/useProductStore';
import { baseURL } from '../lib/baseURL';
import Productedit from './Productedit';

export default function Products() {
  const {getProduct,products} = useProductStore()

  useEffect(()=>{
    getProduct()
  },[])
 
  // console.log(products);
  

  return (
    <div>
      <div className=''>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <Link to="/productadd">ADD</Link>
          </li>
          
          <li class="nav-item">
            <a class="nav-link active" href="#">
              HIDDEN
            </a>
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
              <a href="#" className="btn btn-primary">
                Delete
              </a>
            </div>
          </div>
        </div>
       ))
        
        }

        
      </div>
    </div>
  );
}
