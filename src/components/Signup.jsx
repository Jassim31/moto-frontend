import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'

export default function Signup() {
  const navigate = useNavigate()
  const {signup,authUser} = useAuthStore()
  const [user,setUser] = useState({
    name:"",
    email:"",
    password:""
  })

  const handleRegister = async(e)=>{
    e.preventDefault()
    if(!user.name || !user.email || !user.password){
      alert("Please fill the form completely")
    }else{
      await signup(user)
    }
  }

  useEffect(()=>{
    if(authUser){
      navigate('/')
    }
  },[navigate,authUser])
  return (
   <div className=" d-flex justify-content-center mt-5 ms-5 me-5 mb-5" >
        <div className='border p-5'>
           <form className=''>
            <div className='d-flex justify-content-center'><h1>SIGN UP</h1></div>

            <div><label htmlFor="name" className='form-label'>Name</label></div>
            <input type="text"className='form-control' id="name" onChange={(e)=>setUser({...user,name:e.target.value})}/>

       <div className="w-100 mt-3">
         
         <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setUser({...user,email:e.target.value})}/>
         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
       </div>
       <div className=" w-100">
         <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
         <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setUser({...user,password:e.target.value})}/>
       </div>
       
       <div id='already have an account' className='mb-3'>
       Already have an account<Link to={'/login'}>Login</Link>
       </div>
       <div className='d-flex justify-content-center mt-4 '><button type="submit" className="btn btn-primary mb-5" onClick={(e)=>handleRegister(e)}>SIGN UP</button></div>
     </form>
     
        </div>
       </div>
  )
}
