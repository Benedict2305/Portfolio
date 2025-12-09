import React from "react";
import "./About.css";
import benImage from "../images/ben1.jpg";
const About = () => {
  return (
    <section className="container-fluid px-md-5 " style={{backgroundColor:'#280b08'}}>
      <div className="row ">
        <div className="About-title d-flex justify-content-center align-items-center mx-auto my-3"><h1 className="text-center">About me</h1></div>
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

            <div className="about-skills d-flex flex-column ">
              <div className="about-skill d-flex align-items-center gap-4 ">
                <p className="">HTML & CSS</p>{" "}
                <span style={{ width: "65%" }} />
              </div>
              <div className="about-skill d-flex align-items-center gap-4 ">
                <p className="">JAVASCRIPT </p>{" "}
                <span style={{ width: "59%" }} />
              </div>
              <div className="about-skill d-flex align-items-center gap-4 ">
                <p className="">REACT JS </p>{" "}
                <span style={{ width: "60%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
