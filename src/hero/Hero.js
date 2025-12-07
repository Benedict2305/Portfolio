import React from "react";
import "./Hero.css";
// import "../index.css"
import ben1Image from "../images/ben1.jpg";
const Hero = () => {
  return (
    <section className="container-fluid py-5 bg-dark">
      <div className="row ">
        <div className="col-md-10 col-xl-7 d-flex flex-column justify-content-center align-items-center gap-1 mx-auto">
          <div className="heroImage">
            <img src={ben1Image} alt="" className="rounded-circle" />
          </div>
          <div className="heroContent">
            <h1 className="text-center w-100 fs-1 fw-bolder">
              <span>I'm Benedict Idio</span>, frontend developer
            </h1>
            <p className="text-center mx-auto w-100">
              I am an experienced Frontend Developer with lots of professional
              expertise in the field.
            </p>

            <div className="hero-action d-flex align-items-center  mb-3  justify-content-center">
              <div className="hero-connect px-3 py-2 ">Connect with me</div>
              <div className="hero-resume px-4 py-2 ">My resume</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
