import React, { useEffect, useState } from 'react'
import './Orders.css'
import { axiosInstance } from '../lib/axios'
import { baseURL } from '../lib/baseURL'
export default function UserOrder() {

    const [orders, setOrder] = useState([])


     const getOrders = async()=>{
        const resposne = await axiosInstance.get("/get/order")
        setOrder(resposne.data)
     }
console.log(orders);

     useEffect(()=>{
        getOrders()
     },[])
  return (
    <div><div className='d-flex justify-content-center border bg-primary d-flex justify-content-center mt-2 ms-2 me-2 mb-2 pt-2 ps-2'>
      
        <h1>orders list</h1>
        </div>

       { orders?.map(order=>(
         <div>
            <p className='fw-bold'>OrderId : {order?.OrderId}</p>
            <p className='fw-bold'>Payment Status: Paid</p>
              <div className='row container'>
                  {  order?.items?.map((o)=>(
                   <div className='col-4'>
                        <div className="card" style={{width: '18rem'}}>
                            <img src={`${baseURL}/uploads/${o?.productId?.image}`} className="card-img-top" alt="..." height={"200px"}/>
                            <div className="card-body">
                                <h5 className="card-title">{o?.productId?.name}</h5>
                                <p className="card-text">{o?.productId?.description}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                            </div>
                   </div>
                  ))
                    }
              </div>

        </div>
       ))  
       
     }
  </div>
  )
}
