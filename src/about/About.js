import React from "react";
import "./About.css";
import benImage from "../images/ben1.jpg";
import html_image from '../images/HTML5.png'
import css_image from '../images/CSS3.png'
import bootstrap_5_image from '../images/Bootstrap.png'
import Tailwind_image from '../images/Tailwind CSS.png'
import Javascript_image from '../images/JavaScript.png'
import ReactJs_image from '../images/React.png'
import '../components/General_style.css'
const About = () => {
  return (
    <section id="about" className="container-fluid px-md-5 py-5 " >
      <div className="row ">
        <div className="About-title d-flex justify-content-center align-items-center mx-auto mb-4 scaleAnime"><h1 className="text-center">About me</h1></div>
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
              <p className="fs-5 ourLandinAnimate2">
                I am an experienced Frontend Developer with lots of professional
                expertise in the field. Throughout my career, i have had the
                privilege of collaborating with prestigious organizations,
                contributing to their success and growth
              </p>

              <p className="fs-5 ourLandinAnimate2">
                My passion for frontend development is not only reflected in my
                extensive experience but also in the enthusiasm and dedication i
                bring to each project.
              </p>
            </div>

            {/* <div className="about-skills d-flex flex-column ">
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
            </div> */}

            <aside className="about_skills_container dCaptionText2Anime">
              <h2 className="text-center mb-3">My Skills</h2>
              <div className="about_skills d-flex justify-content-center flex-wrap column-gap-5 row-gap-2 bePartanimatio">
                <figure className="d-flex flex-column justify-content-center align-items-center ">
                  <img src={html_image} alt="" />
                  <figcaption>HTML</figcaption>
                </figure>
                <figure className="d-flex flex-column justify-content-center align-items-center">
                  <img src={css_image} alt="" />
                  <figcaption>CSS</figcaption>
                </figure>
                <figure className="d-flex flex-column justify-content-center align-items-center">
                  <img src={Tailwind_image} alt="" />
                  <figcaption>Tailwind</figcaption>
                </figure>
                <figure className="d-flex flex-column justify-content-center align-items-center">
                  <img src={bootstrap_5_image} alt="" />
                  <figcaption>Bootstrap</figcaption>
                </figure>
                <figure className="d-flex flex-column justify-content-center align-items-center">
                  <img src={Javascript_image} alt="" />
                  <figcaption>Javascript</figcaption>
                </figure>
                <figure className="d-flex flex-column justify-content-center align-items-center">
                  <img src={ReactJs_image} alt="" />
                  <figcaption>React</figcaption>
                </figure>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
