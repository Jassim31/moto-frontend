import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div >
      {/* fixed-top */}
     <div className=''>
        <div className="colour1 text-center pt-2 pb-2 ">
          Hurry! EXTRA 5% DISCOUNT & Fast Shipping on all UPI | GPay PhonePe PayTM
          |Credit & Debit Card Orders <i class="fa-solid fa-truck"></i>{" "}
          <i class="fa-solid fa-box"></i>
        </div>
  
        <div className=''>
          <nav className="navbar navbar-expand-lg  headercolour ">
            <div className="container-fluid ">
             
                <a className="navbar-brand">
                  <Link to={"/"} className="hidelink color">
                    {" "}
                    <h1>
                      MOTO 31<sup>TM</sup>
                    </h1>{" "}
                    <h6>Two wheeler spares market place</h6>
                  </Link>
                </a>
            
  
              <form className="d-flex w-75 " role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success color" type="submit">
                  <i class="fa-brands fa-searchengin"></i>
                </button>
              </form>
  
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                 
  
                  <li className="nav-item  ms-2 ">
                    <a className="nav-link active" aria-current="page">
                      
                      <Link to={"/login"} className="hidelink color text-center">
                      <p className='text-center'>My Account</p>
                      </Link>
                    </a>
                  </li>
  
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page">
                      <Link to={"/cart"} className="hidelink color">
                        Cart
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page">
                      <Link to={"/service"} className="hidelink color">
                        Service
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page">
                      <Link to={"/spare"} className="hidelink color">
                        Spare
                      </Link>
                    </a>
                  </li>
  
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page">
                      <Link to={"/locateus"} className="hidelink color">
                       <p className='text-center'>Locate Us</p>
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
     </div>
    </div>
  );
}
