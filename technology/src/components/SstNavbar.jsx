import React from 'react'
import sstlogo from '../images/sstlogo.jpg';
function SstNavbar() {
  return (
    <div>
        <div class="container">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-0 border-bottom">
          <img src={sstlogo} style={{width:"25%", height:"50px"}}/>
      
      <ul class="nav col-8">
        <li style={{fontFamily:"serif"}}><a href="#" class="nav-link px-2 link-danger">Home</a></li>
        <li><a href="#" class="nav-link px-2">About Us</a></li>
        <li><a href="#" class="nav-link px-2">Services</a></li>
        <li><a href="#" class="nav-link px-2">Products</a></li>
        <li><a href="#" class="nav-link px-2">Download</a></li>
        <li><a href="#" class="nav-link px-2">Portfolio</a></li>
        <li><a href="#" class="nav-link px-2">Career</a></li>
        <li><a href="#" class="nav-link px-2">Contact Us</a></li>
      </ul>
    </header>
        </div>
    </div>
  )
}

export default SstNavbar;