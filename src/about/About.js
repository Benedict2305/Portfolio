import React from "react";
import "./About.css";
import benImage from "../images/ben1.jpg";
const About = () => {
  return (
    <div className="container-xl mb-4">
      <div className="row my-5">
        <div className="About-title d-flex justify-content-center align-items-center mx-auto"><h1 className="text-center">About me</h1></div>
      </div>

      <div className="row">
        <div className="col-4">
          <div className="about-image">
            <img src={benImage} alt="" className="img-fluid rounded" />
          </div>
        </div>
        <div className="col-8">
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

            <div className="about-skills d-flex flex-column gap-2">
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
              <div className="about-skill d-flex align-items-center gap-4">
                <p className="">NEXT JS </p> <hr style={{ width: "68%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="about-title">
          <h1>About me</h1>
        </div>
        <img src="" alt="" />

        <div className="about-details">
          <div className="about-left">
            <img src={benImage} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, iste?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, optio.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p> <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>BOOTSTRAP & TAILWIND </p> <hr style={{ width: "80%" }} />
              </div>
              <div className="about-skill">
                <p>JAVASCRIPT </p> <hr style={{ width: "67%" }} />
              </div>
              <div className="about-skill">
                <p>REACT JS </p> <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>NEXT JS </p> <hr style={{ width: "68%" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="about-achievements">
            <div className="about-achievement">
                <h1>4+</h1>
                <p>projects completed</p>
            </div>
            <div className="about-achievement">
                <h1>4+</h1>
                <p>Happy Clients</p>
            </div>
        </div> */}
    </div>
  );
};

export default About;
