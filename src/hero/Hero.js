import React from 'react'
import './Hero.css'
// import "../index.css"
import ben1Image from '../images/ben1.jpg'
const Hero = () => {
  return (
    <div className='container-fluid mt-5 pt-4'>
      <div className="row ">
        <div className="col d-flex flex-column justify-content-center align-items-center gap-1">
            <div className="heroImage"><img src={ben1Image} alt="" className='rounded-circle' /></div>
            <div className="heroContent">
              <h1 className='text-center w-100 fs-1 mx-auto fw-bolder'><span>I'm Benedict Idio</span>, frontend developer</h1>
            <p className='mx-auto'>I am an experienced Frontend Developer with lots of professional expertise in the field.</p>

            <div className="hero-action d-flex align-items-center  mb-3  justify-content-center">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
