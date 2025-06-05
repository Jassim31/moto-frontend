import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
   <div className=" d-flex justify-content-center mt-5 ms-5 me-5 mb-5" >
        <div className='border p-5'>
           <form className=''>
            <div className='d-flex justify-content-center'><h1>SIGN UP</h1></div>

            <div><label htmlFor="name" className='form-label'>Name</label></div>
            <input type="text"className='form-control' id="name"/>
            <div><label htmlFor="phone number" className='form-label'>Phone Number</label></div>
            <input type="number"className='form-control' id="phonenumber"/>

       <div className="w-100 mt-3">
         
         <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
       </div>
       <div className=" w-100">
         <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
         <input type="password" className="form-control" id="exampleInputPassword1" />
       </div>
       
       <div id='already have an account' className='mb-3'>
       Already have an account<Link to={'/login'}>Login</Link>
       </div>
       <div className='d-flex justify-content-center mt-4 '><button type="submit" className="btn btn-primary mb-5">SIGN UP</button></div>
     </form>
     
        </div>
       </div>
  )
}
