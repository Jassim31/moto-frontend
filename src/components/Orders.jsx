import React from 'react'
import './Orders.css'

export default function Orders() {
  return (
  <div>
    <div className='d-flex justify-content-center border bg-primary d-flex justify-content-center mt-2 ms-2 me-2 mb-2 pt-2 ps-2'>
      
        <h1>orders list</h1>
        </div>
        
     

        <div>   <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Product</th>
      <th scope="col">View</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td> 
    <img className='size'
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"/>
      
  
  </td>
  <td><button><i class="fa-solid fa-eye"></i></button></td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td> 
    <img className='size'
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"/>
   
  </td>
  <td><button><i class="fa-solid fa-eye"></i></button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td> <img className='size'
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"/></td>
      <td><button><i class="fa-solid fa-eye"></i></button></td>
    </tr>
  </tbody>
</table></div>
  
    </div>
    
  )
}
