import React, { useEffect } from 'react'
import { Await, Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'

export default function Admin_dashboard() {
  
const { authUser, checkAuth, logout } = useAuthStore();
const navigate =useNavigate();
useEffect(() => {
  if (!authUser){
    navigate("/login")
  }
},[checkAuth,authUser]);

const handleLogout = async () => {
  await logout();
};

  return (
    <div className="container-fluid  w-100">
      
     
      <div className="border bg-primary d-flex justify-content-center w-100 mt-2 ms-2 me-2 mb-2 pt-2 ps-2 ">
        <h1>Dashboard</h1>
        </div>
        <div className='row'>

          <div className='col'>
            
              <div className=" card bg-base-100  shadow-sm  mt-5 ms-5 me-5 mb-5">
    <div className="card-body ">
      <Link to="/userlist">
      <h2 className="card-title d-flex justify-content-center mt-5 ms-5 me-5 mb-5">Users</h2>
      </Link>
    </div>
    <figure className='d-flex justify-content-center mt-5 ms-5 me-5 mb-5'>
      <img className='w-100'
        src="https://thumbs.dreamstime.com/b/vector-illustration-isolated-white-background-user-profile-avatar-black-line-icon-user-profile-avatar-black-solid-icon-121102166.jpg?w=768"
        alt="Shoes" />
    </figure>
  </div>
  
          </div>


      
          <div className='col'>
            <div className=" card bg-base-100  shadow-sm d-flex justify-content-center mt-5 ms-5 me-5 mb-5">
      <div className="card-body">
        <Link to="/products">
        <h2 className="card-title d-flex justify-content-center mt-5 ms-5 me-5 mb-5"> 
          Products</h2></Link>
  
      </div>
      <figure className='d-flex justify-content-center mt-5 ms-5 me-5 mb-5'>
        <img className='w-100'
          src="https://cdn-icons-png.flaticon.com/512/4129/4129528.png"
          alt="Shoes" />
      </figure>
    </div>
  
          </div>
<div className='col'>
  <div className=" card bg-base-100  shadow-sm d-flex justify-content-center mt-5 ms-5 me-5 mb-5">
    <div className="card-body">
    <Link to="/orders">
      <h2 className="card-title d-flex justify-content-center mt-5 ms-5 me-5 mb-5">Orders</h2>
      </Link>
    </div>
    <figure className='d-flex justify-content-center mt-5 ms-5 me-5 mb-5'>
      <img className='w-100'
        src="https://img.freepik.com/premium-vector/online-order-icon_1134231-36248.jpg"
        alt="Shoes" />
    </figure>
  </div>
</div>

</div>

<div className='d-flex justify-content-center mt-4 '><Link to={"/Signup"}><button type="submit" className="btn btn-primary mb-5" onClick={handleLogout}>LOGOUT</button></Link></div>


</div>


    
  )
}
