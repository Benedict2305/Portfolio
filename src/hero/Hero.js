import React from "react";
import "./Hero.css";
import "../components/General_style.css";
import ben1Image from "../images/ben1.jpg";
const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="container-fluid d-flex flex-column justify-content-center align-items-center"
      >
        <div className="row ">
          <div className="col-md-10 col-xl-8 d-flex flex-column justify-content-center align-items-center gap-1 mx-auto">
            <div className="heroImage">
              <img src={ben1Image} alt="" className="rounded-circle" />
            </div>
            <div className="heroContent scaleAnime">
              <h1 className="text-center w-100 fs-1 fw-bolder dCaptionText2Anime">
                <span>I'm Benedict Idio</span>, frontend developer
              </h1>
              <p className="text-center mx-auto w-100 dCaptionText2Anime">
                I am an experienced Frontend Developer with lots of professional
                expertise in the field.
              </p>

              <div className="hero-action d-flex align-items-center mb-3  justify-content-center ">
                <div className="hero-connect px-2 px-md-3 py-2  ">
                  Connect with me
                </div>
                <div
                  className="hero-resume px-2 px-md-4 py-2 "
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  CV / Resumé
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      


    </>
  );
};

export default Hero;
