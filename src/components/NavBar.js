import React from 'react'
import '../index.css'
import { NavLink } from 'react-bootstrap'
import benLogo from '../assets/Images/benLogo.jpg'
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid align-items-center justify-content-start">
    {/* <div className="row  justify-content-between"> */}
    <NavLink className="navbar-brand" href="#"><img src={benLogo} width={100} alt="" /></NavLink>
    <button className="navbar-toggler align-items-start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto gap-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link vvvactive" aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" href="#">About me</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" href="#">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" href="#">portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" href="#">Contact</NavLink>
        </li>
        
      </ul>
      <div className="nav-connect text-primary">Connect with me</div>
    </div>
  </div>
  {/* </div> */}
</nav>
  )
}

export default NavBar
