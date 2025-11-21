import React from "react";
import "./Footer.css";
import { NavLink } from "react-bootstrap";
import { useState, useEffect } from "react";

const Footer = () => {
  const [copyRightDate, setCopyRightDate] = useState("");
  useEffect(() => {
    const getRunningDate = new Date();
    const runningYear = getRunningDate.getFullYear();
    setCopyRightDate(runningYear);
    // console.log(runningYear)
  }, []);
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-12">
          <div className="row align-items-center justify-content-center">
            <div className="col-6 footerBrand">
              <h1>Benedict</h1>
              <p className="fs-5">
                I am an experienced Frontend Developer with lots of professional
                expertise in the field.
              </p>
            </div>
            <div className="col-6">
              <form className="d-flex gap-4 justify-content-center subscribeForm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-pill w-75 py-2 ps-3"
                />

                <input
                  type="submit"
                  value="Subscribe"
                  className="rounded-pill px-4 fw-bolder"
                />
              </form>
            </div>
          </div>
        </div>

        <hr />
        <div className="col-12">
          <div className="row">
            <div className="col-6 copyRight">
              {" "}
              <p>© {copyRightDate} Benedict Idio. All rights reserved.</p>
            </div>
            <div className="col-6 d-flex justify-content-between footer">
              <NavLink className=" footerTerms">Terms of services</NavLink>
              <NavLink className="footerTerms">Privacy Policy </NavLink>
              <NavLink className="footerTerms">Connect with me</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
