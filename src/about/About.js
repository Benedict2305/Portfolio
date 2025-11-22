import React from "react";
import "./About.css";
import benImage from "../images/ben1.jpg";
const About = () => {
  return (
    <div className="container-xl mb-4">
      <div className="row my-5">
        <div className="About-title d-flex justify-content-center align-items-center mx-auto"><h1 className="text-center">About me</h1></div>
      </div>

      <div className="row d-md-flex align-items-center">
        <div className="col-md-5 col-xl-4">
          <div className="about-image mx-auto">
            <img src={benImage} alt="" className="img-fluid rounded" />
          </div>
        </div>
        <div className="col-md-7">
          <div className="about-content">
            <div className="about-detail">
              <p className="fs-5">
                I am an experienced Frontend Developer with lots of professional
                expertise in the field. Throughout my career, i have had the
                privilege of collaborating with prestigious organizations,
                contributing to their success and growth
              </p>

              <p className="fs-5">
                My passion for frontend development is not only reflected in my
                extensive experience but also in the enthusiasm and dedication i
                bring to each project.
              </p>
            </div>

            <div className="about-skills d-flex flex-column gap-">
              <div className="about-skill d-flex align-items-center gap-4">
                <p className="">HTML & CSS</p>{" "}
                <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill d-flex align-items-center gap-4">
                <p className="">JAVASCRIPT </p>{" "}
                <hr style={{ width: "67%" }} />
              </div>
              <div className="about-skill d-flex align-items-center gap-4">
                <p className="">REACT JS </p>{" "}
                <hr style={{ width: "70%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
