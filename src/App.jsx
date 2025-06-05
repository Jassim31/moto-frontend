import { Route, Routes } from 'react-router-dom'
import './App.css'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/Login'
import Signup from './components/Signup'
import Admin_dashboard from './components/Admin_dashboard'
import Products from './components/Products'
import Orders from './components/Orders'

import Userlist from './components/Userlist'
import Mygarage from './components/Mygarage'
import Cart from './components/Cart'
import Service from './components/Service'
import Spare from './components/Spare'
import Locationaddress from './components/Locationaddress'
import Productadd from './components/Productadd'

function App() {


  return (
    <>
    <div> 
      <Header/>
      <Routes>
        <Route path='/' element={<Carousel/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/admin_dashbord' element={<Admin_dashboard/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/orders' element={<Orders/>}/>
        
        <Route path='/userlist' element={<Userlist/>}/>
        <Route path='/mygarage' element={<Mygarage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/spare' element={<Spare/>}/>
        <Route path='/locateus' element={<Locationaddress/>}/>
        <Route path='/productadd' element={<Productadd/>}/>
      </Routes>
      <Footer/>
      
      
     


   </div>
    
    </>
  )
}

export default App
