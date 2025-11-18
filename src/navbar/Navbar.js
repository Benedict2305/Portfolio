import React from 'react'
import '../index.css'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar d-flex align-items-center justify-content-between my-3 mx-5'>
      <div className="">Benedict</div>
      <ul className='navMenu d-flex align-items-center list-unstyled'>
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="navConnect">Connect with Me</div>
    </div>
  )
}

export default Navbar
