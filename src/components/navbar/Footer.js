import React from "react";
import "./Footer.css";
import { NavLink } from "react-bootstrap";
import { useState, useEffect } from "react";
import '../General_style.css'
import benedictLogo from "../images/benedictLogo.png";
const Footer = () => {
  const [copyRightDate, setCopyRightDate] = useState("");
  useEffect(() => {
    const getRunningDate = new Date();
    const runningYear = getRunningDate.getFullYear();
    setCopyRightDate(runningYear);
  }, []);

  return (
    <div
      className="container-fluid mb-4  py-3 position-absolute buttom-0 px-md-5"
      style={{ backgroundColor: "#280b08" }}
    >
      <div className="row">
        <div className="col-12">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 footerBrand">
              <h1>Benedict</h1>
              <p className="fs-5 scaleAnime">
                I am an experienced Frontend Developer with lots of professional
                expertise in the field.
              </p>
            </div>
            <article className="col-md-6 d-flex column-gap-4 align-items-center justify-content-center">
              <NavLink className="footer_icon">
                <i class="bi bi-facebook fs-3 rounded-pill" onClick={() => window.open("https://www.facebook.com/ben.vic.7", "_blank")}></i>
              </NavLink>
              <NavLink className="footer_icon">
                <i class="bi bi-whatsapp fs-3" onClick={() => window.open('https://wa.me/+2347067979657', '_blank')}></i>
              </NavLink>
              <NavLink className="footer_icon">
                <i class="bi bi-github fs-3" onClick={() => window.open("https://github.com/Benedict2305", "_blank")}></i>
              </NavLink>
              <NavLink className="footer_icon">
                <i
                  class="bi bi-linkedin fs-3"
                  onClick={() => window.open("https://www.linkedin.com/in/benedict-idio-b2650b398", "_blank")}
                ></i>
              </NavLink>
            </article>
          </div>
        </div>

        <hr className="mt-4 mt-sm-0" />
        <div className="col-12">
          <div className="row changingReverse">
            <div className="col-md-5 col-lg-6 copyRight">
              {" "}
              <p>© {copyRightDate} All rights reserved.</p>
            </div>
            <div className="col-md-7 col-lg-6 d-flex justify-content-evenl column-gap-3 footer flex-wrap">
              <NavLink className=" footerTerms text-nowrap">
                Terms of services
              </NavLink>
              <NavLink className="footerTerms text-nowrap">
                Privacy Policy{" "}
              </NavLink>
              <NavLink className="footerTerms text-nowrap">
                Connect with me
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
