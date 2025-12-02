import React from 'react'
import { NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
const Nav = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md bg-dark sticky-top w-100 ">
            <div className="container-fluid d-flex align-item-center justify-content-between px-lg-5">
              <div className="navbar-brandDiv d-flex align-items-center justify-content-center">
                <NavLink className="navbar-brand d-flex align-items-center justify-content-center">
                  {/* <img
                    src={logoImage}
                    alt=""
                    width={70}
                    height={50}
                    style={
                    { objectFit: "cover" }}
                  /> */}
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
      
              <div className=" d-none d-md-block ">
                <div>
                  <ul className="navbar-nav nav-underline d-flex justify-content-between  align-items-center ">
                    <NavLink
                      className="text-decoration-none  navStyling"
                      to="/"
                      style={({ isActive }) => ({
                        color: isActive ? "rgb(231, 154, 57)" : "white",
                        fontWeight: isActive ? "bolder" : "normal",
                      })}
                    >
                      Home
                      <span></span>
                    </NavLink>
      
                    <NavLink
                      className="text-decoration-none navStyling"
                      to="/menu"
                      style={({ isActive }) => ({
                        color: isActive ? "rgb(231, 154, 57)" : "white",
                        fontWeight: isActive ? "bolder" : "normal",
                      })}
                    >
                      Menu
                      <span></span>
                    </NavLink>
      
                    <NavLink
                      className="text-decoration-none navStyling text-nowrap"
                      to="/about"
                      style={({ isActive }) => ({
                        color: isActive ? "rgb(231, 154, 57)" : "white",
                        fontWeight: isActive ? "bolder" : "normal",
                      })}
                    >
                      About
                      <span></span>
                    </NavLink>
      
                    <NavLink
                      className="text-decoration-none navStyling text-nowrap"
                      to="/contact"
                      style={({ isActive }) => ({
                        color: isActive ? "rgb(231, 154, 57)" : "white",
                        fontWeight: isActive ? "bolder" : "normal",
                      })}
                    >
                      Contact
                      <span></span>
                    </NavLink>
                    <NavLink
                      className="text-decoration-none navStyling"
                      to="/service"
                      style={({ isActive }) => ({
                        color: isActive ? "rgb(231, 154, 57)" : "white",
                        fontWeight: isActive ? "bolder" : "normal",
                      })}
                    >
                      Service
                      <span></span>
                    </NavLink>
                    <NavLink
                      className="text-decoration-none navStyling"
                      to="/events"
                      style={({ isActive }) => ({
                        color: isActive ? "rgb(231, 154, 57)" : "white",
                        fontWeight: isActive ? "bolder" : "normal",
                      })}
                    >
                      Events
                      <span></span>
                    </NavLink>
                    <NavLink
                      className="text-decoration-none  px-md-2 py-2 GeneralBackground text-dark text-nowrap rounded-pill"
                      to="/book_a_table"
                      style={({ isActive }) => ({
                        color: isActive ? "rgb(231, 154, 57)" : "white",
                        fontWeight: isActive ? "bolder" : "normal",
                      })}
                    >
                      Book A Table
                      <span></span>
                    </NavLink>
      
                    <NavLink
                      className="text-decoration-none p-2 rounded-circle GeneralBackground"
                      to="/cart"
                    >
                      <FontAwesomeIcon icon={faCartPlus} className="text-white" />
                    </NavLink>
                  </ul>
                </div>
              </div>
            </div>
      
            <div
              className=" side-width position-fixed top-0 start-0 w-100  d-md-none hoverTextDiv"
              style={{ marginTop: 4.75 + "rem" }}
            >
              <div
                className="collapse  navbar-collapse   phone-nav-color phoneBorder"
                id="navbarNav"
              >
                <ul className="navbar-nav nav-underline phone-transform  ">
                  <li className=" hoverText nav-item ">
                    <NavLink
                      className="text-decoration-none fs-5 py-1 text-center  hoverText d-block w-100 liNav"
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
                      className="text-decoration-none fs-5 py-1 text-center  hoverText d-block w-100 liNav"
                      to="/menu"
                      style={({ isActive }) => ({
                        color: isActive ? "cyan" : "white",
                        fontWeight: isActive ? "bolder" : "normal",
                      })}
                    >
                      <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        Menu
                      </span>
                    </NavLink>
                  </li>
                  <li className="hoverText nav-item ">
                    <NavLink
                      className="text-decoration-none fs-5 py-1 text-center hoverText d-block w-100 liNav"
                      to="/about"
                      style={({ isActive }) => ({
                        color: isActive ? "cyan" : "white",
                        fontWeight: isActive ? "bolder" : "normal",
                      })}
                    >
                      <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        About
                      </span>
                    </NavLink>
                  </li>
                  <li className="hoverText nav-item ">
                    <NavLink
                      className="text-decoration-none fs-5 py-1  hoverText d-block w-100 liNav text-center"
                      to="/contact"
                      style={({ isActive }) => ({
                        color: isActive ? "cyan" : "white",
                        fontWeight: isActive ? "bolder" : "normal",
                      })}
                    >
                      <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        Contact
                      </span>
                    </NavLink>
                  </li>
      
                  <li className="hoverText nav-item ">
                    <NavLink
                      className="text-decoration-none fs-5 py-1  hoverText d-block w-100 liNav text-center"
                      to="/service"
                      style={({ isActive }) => ({
                        color: isActive ? "cyan" : "white",
                        fontWeight: isActive ? "bolder" : "normal",
                      })}
                    >
                      <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        Services
                      </span>
                    </NavLink>
                  </li>
      
                  <li className="hoverText nav-item ">
                    <NavLink
                      className="text-decoration-none fs-5 py-1  hoverText d-block w-100 liNav text-center"
                      to="/events"
                      style={({ isActive }) => ({
                        color: isActive ? "cyan" : "white",
                        fontWeight: isActive ? "bolder" : "normal",
                      })}
                    >
                      <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        Events
                      </span>
                    </NavLink>
                  </li>
      
                  <NavLink
                    className="text-decoration-none fs-5 py-1 hoverTex d-block w-100 text-center"
                    to="/cart"
                  >
                    <span
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNav"
                      className="border-warning border rounded-circle p-3"
                    >
                      <FontAwesomeIcon icon={faCartPlus} className="text-white" />
                    </span>
                  </NavLink>
      
                  <NavLink
                    className="text-decoration-none px-2 px-md-4 py-2 bg-warning text-dark w-50 mx-auto rounded-pill text-center fw-bolder"
                    to="/book_a_table"
                    role="button"
                    style={({ isActive }) => ({
                      color: isActive ? "cyan" : "white",
                      fontWeight: isActive ? "bolder" : "normal",
                    })}
                  >
                    <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                      Book A Table
                    </span>
                  </NavLink>
                </ul>
              </div>
            </div>
          </nav>
    </header>
  )
}

export default Nav
