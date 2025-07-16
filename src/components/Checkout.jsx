import React, { useEffect, useState } from 'react'
import { useCartStore } from '../store/useCartStore'
import { baseURL } from '../lib/baseURL'
import { axiosInstance } from '../lib/axios'

export default function Checkout() {
  const [address, setAddress] = useState()
    const {getCart ,cart } = useCartStore()
    useEffect(()=>{
        getCart()
    },[])

// create razorpay order

              //appendChild is used to load script into a body 
    
        const loadScript = (src) => {
          return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => {
          resolve(true)
          }
          script.onerror = () => {
          resolve(false)

          }
          document.body.appendChild(script);
          })
         }


           
// api calling

  const createRazorpayOrder = async() => {
    
if(!address)
  alert("fill all fields")

    const res = await axiosInstance.post('create/order',{address})

    
      handleRazorpayScreen(res)

    .catch((error) => {
      console.log("error at", error)
    })
  }

// razorpay interface

  const handleRazorpayScreen = async(res) => {
    
    const response = await loadScript("https:/checkout.razorpay.com/v1/checkout.js")
    

    if (!response) {
      alert("Some error at razorpay screen loading")
      return;
    }

// amount * 100 is used to get the real amount(total payout)

    const options = {
      key: 'rzp_test_Xd27hxbFVPVBj9',
      amount: res.data.amount * 100,
      currency: 'INR',

      handler: async function (response){
        const result = await axiosInstance.put("/order/update",{OrderId: res.data.OrderId, paymentID: response.razorpay_payment_id})
        if(result.status == 200){
          alert("Order Placed Successfully")
        }else{
          alert("Something went wrong...")
        }
        
      },
      
      theme: {
        color: "#F4C430"
      }
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }



  
   
  return (
    <div className='container'>

     {
      cart?.products?.length <=0 ? 
      <p className='m-5 text-center fs-1'>Cart is Empty</p>:
      
      <div className='row'>

        <div className='col'>
            
            <form>
                <label htmlFor="name" className='form-label'>ADDRESS</label>
                <textarea name="" id="" onChange={(e)=>setAddress(e.target.value)}></textarea>
                
            </form>

            <button className='btn btn-success' onClick={createRazorpayOrder}>
              Proceed to Checkout
            </button>
   
        </div>
        
            <div className="col">
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
        
     </div>}

    </div>
  )
}
