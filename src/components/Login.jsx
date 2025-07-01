
import { GoogleLogin } from '@react-oauth/google';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore';

export default function Login() {
  const {login , authUser} = useAuthStore() 
  const navigate = useNavigate()
  const [user,setUser] = useState({
    email: "",
    password: ""
  })

  const handleLogin = async(e)=>{
    e.preventDefault()

    if(!user.email || !user.password){
      alert("All fields are required")
    }else{
      await login(user)
    }
  }

  useEffect(()=>{
    if(authUser){
      if(authUser.role===0){
        navigate('/')
      }else if(authUser.role === 1){
        navigate('/admin_dashbord')
      }
    }
  },[authUser,navigate])
  return (
    <div className=" d-flex justify-content-center mt-5 ms-5 me-5 mb-5" >
     <div className='border p-5'>
        <form className=''>
    <div className="w-100 mt-3">
      <div className='d-flex justify-content-center'><h1>LOGIN</h1></div>
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setUser({...user,email: e.target.value})}/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className=" w-100">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setUser({...user,password: e.target.value})}/>
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div>
    <div> Don't have an account? <Link to="/signup">Sign-up</Link></div>
   
    <div className='d-flex justify-content-center mt-4 '><button type="submit" className="btn btn-primary mb-5" onClick={(e)=>handleLogin(e)}>LOGIN</button></div>
  </form>
  <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
  useOneTap

/>;
     </div>
    </div>
  )
}
