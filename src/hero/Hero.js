import React from 'react'
import './Hero.css'
import "../index.css"
import ben1Image from '../images/ben1.jpg'
const Hero = () => {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col">
            <img src={ben1Image} alt="" />
            <h1><span>I'm Benedict Idio</span>, frontend developer based in Nigeria</h1>
            <p>i am a frontend developer from Lagos, Nigeria with lots of experience in multiple companies.</p>

            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>ikk
      </div>
    </div>
  )
}

export default Hero
