import React from "react";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Hero.css";
import "../General_style.css";
import splined from "../images/scene-clean.splinecode";


import cv from '../images/BENEDICT_CV_MAIN.pdf'
import resume from '../images/BENEDICT_résumé .pdf'

const Hero = () => {
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const viewer = document.querySelector("spline-viewer");
  //     if (viewer && viewer.shadowRoot) {
  //       const logo = viewer.shadowRoot.querySelector("#logo");
  //       if (logo) {
  //         logo.remove();
  //         clearInterval(interval);
  //       }
  //     }
  //   }, 500);

  //   return () => clearInterval(interval); // cleanup
  // }, []);

  const splineRef = useRef(null);

  useEffect(() => {
    if (splineRef.current) {
      const viewer = splineRef.current;
      const interval = setInterval(() => {
        if (viewer.shadowRoot) {
          const logo = viewer.shadowRoot.querySelector("#logo");
          if (logo) {
            logo.remove();
            clearInterval(interval);
          }
        }
      }, 500);
      return () => clearInterval(interval);
    }
  }, []);
  return (
    <>
      <section id="hero" className="container-fluid ">
        <div className="row">
          <div className="col-lg-10 col-xl-7  d-flex flex-column justify-content-center">
            <div className="heroContent scaleAnime ms-md-5">
              <h1 className="text-start w-100  dCaptionText2Anime">
                <span>I'm Benedict Idio</span>, Frontend developer
              </h1>
              <p className="text-start mx-auto w-100 dCaptionText2Anime">
                Frontend Developer with hands-on experience building responsive, user-focused web applications using HTML, CSS, JavaScript, and React. Comfortable translating designs into clean, functional interfaces and collaborating with cross-functional teams.
              </p>

              <div className="hero-action mb-3  ">
                <NavLink to='/contact' className="hero-connect px-2 px-md-3 py-2 text-decoration-none ">
                  Connect with me
                </NavLink>

                <div class="dropdown pe-lg-3 ">
                  <button
                    class="btn btn-transparent rounded-pill dropdown-toggle resumeCVNavBar text-white d-flex align-items-center "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    CV / Resumé
                  </button>
                  <ul class="dropdown-menu bg-transparent">
                    <li className="">
                      <a
                        role="button"
                        // href="https://drive.google.com/uc?export=download&id=1Xussd4NmZ3zq0dojdea8F2PXaXzAsjwf"
                        href={resume}
                        className="dropdown-item rounded-pill text-white fw-bolder mt-md-2"
                        download ='BENEDICT_Resumé.pdf'
                      >
                        Download Resumé
                        
                      </a>
                    </li>
                    <li className="">
                      <a
                        role="button"
                        // href="https://drive.google.com/uc?export=download&id=1bUx9ZPfDPaUBw-FWjyRcPWtW5X__3Jhd"
                        href={cv}
                        className="dropdown-item rounded-pill text-white fw-bolder mt-md-2"
                        download ='BENEDICT_CV.pdf'
                      >
                        Download CV
                        
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" splineColParent bg-warnin d-none d-xl-block">
            
              <spline-viewer className="robot-3d" url={splined}  ref={splineRef}></spline-viewer>
          
            {/* <spline-viewer className="robot-3d" url="https://prod.spline.design/ZyFXMtrmvnYRJpzs/scene.splinecode"></spline-viewer> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
