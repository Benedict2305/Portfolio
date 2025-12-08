import React from "react";
import { NavLink} from "react-router-dom";
import "./NavBar.css";
import benlogo from '../images/benedictLogo.png'
// import "../component/GeneralStyles.css";

const NavBar = () => {
  
  return (
    <header className="py-3  sticky-top" style={{backgroundColor:'#280b08'}}>
    <nav className="navbar navbar-expand-md   ">
      <div className="container-fluid px-md-5 d-flex align-item-center justify-content-between">
        <div className="navbar-brandDiv d-flex align-items-center justify-content-center">
          <NavLink className="navbar-brand d-flex align-items-center justify-content-center text-white" style = {{ fontFamily:'Hanalei',fontSize: 30 + 'px', letterSpacing:3}}>
            {/* <img src={benlogo} width={150} alt="" /> */}
            Benedict
          </NavLink>
        </div>

        <div>
          <button
            className="navbar-toggler border-white focus-ring focus-ring-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="bi bi-list text-white "></i>
            </span>
          </button>
        </div>

        <div className=" d-none d-md-block me-md-5">
          <div>
            <ul className="navbar-nav nav-underline d-flex justify-content-center align-items-center ">
              

              <NavLink
                className="text-decoration-none navStyling rounded-pill"
                to="/"
                style={({ isActive }) => ({
                  background: isActive ? "linear-gradient(270deg, #df8908 10%, #b415ff 100% )" : "black",
                  fontWeight: isActive ? "bolder" : "normal",
                })}
              >
                Home
                <span></span>
              </NavLink>
              <NavLink
                className="text-decoration-none navStyling rounded-pill"
                to="/about"
                style={({ isActive }) => ({
                  background: isActive ? "linear-gradient(270deg, #df8908 10%, #b415ff 100% )" : "black",
                  fontWeight: isActive ? "bolder" : "normal",
                })}
              >
                About
                <span></span>
              </NavLink>

              <NavLink
                className="text-decoration-none navStyling rounded-pill"
                to="/portfolio"
                style={({ isActive }) => ({
                  background: isActive ? "linear-gradient(270deg, #df8908 10%, #b415ff 100% )" : "black",
                  fontWeight: isActive ? "bolder" : "normal",
                })}
              >
                Portfolio
                <span></span>
              </NavLink>

              <NavLink
                className="text-decoration-none navStyling rounded-pill"
                to="/contact"
                style={({ isActive }) => ({
                  background: isActive ? "linear-gradient(270deg, #df8908 10%, #b415ff 100% )" : "black",
                  fontWeight: isActive ? "bolder" : "normal",
                })}
              >
                Contact
                <span></span>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>

      <div className=" side-width position-fixed top-0 start-0 mt-5 w-100  d-md-none hoverTextDiv">
        <div
          className="collapse  navbar-collapse  pb-3 phone-nav-color phoneBorder "
          id="navbarNav"
        >
          <ul className="navbar-nav nav-underline phone-transform mt-3 ">
            <li className=" hoverText nav-item ">
              <NavLink
                className="text-decoration-none fs-5 py-2 text-center  hoverText d-block w-100 liNav"
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "cyan" : "white",
                  fontWeight: isActive ? "bolder" : "normal",
                })}
              >
                <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  Home
                </span>
              </NavLink>
            </li>
            
            <li className="hoverText nav-item ">
              <NavLink
                className="text-decoration-none fs-5 py-2 text-center hoverText d-block w-100 liNav"
                to="/about"
                style={({ isActive }) => ({
                  color: isActive ? "cyan" : "white",
                  fontWeight: isActive ? "bolder" : "normal",
                })}
              >
                <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  About Us
                </span>
              </NavLink>
            </li>

            <li className="hoverText nav-item ">
              <NavLink
                className="text-decoration-none fs-5 py-2 text-center hoverText d-block w-100 liNav"
                to="/about"
                style={({ isActive }) => ({
                  color: isActive ? "cyan" : "white",
                  fontWeight: isActive ? "bolder" : "normal",
                })}
              >
                <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  PortFolio
                </span>
              </NavLink>
            </li>
            <li className="hoverText nav-item ">
              <NavLink
                className="text-decoration-none fs-5 py-2  hoverText d-block w-100 liNav text-center"
                to="/contact"
                style={({ isActive }) => ({
                  color: isActive ? "cyan" : "white",
                  fontWeight: isActive ? "bolder" : "normal",
                })}
              >
                <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  Contact us
                </span>
              </NavLink>
            </li>          
          </ul>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default NavBar;
