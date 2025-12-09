import React from "react";
import "./Hero.css";
import ben1Image from "../images/ben1.jpg";
const Hero = () => {
  return (
    <section
      className="container-fluid py-5"
      style={{ backgroundColor: "#280b08" }}
    >
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

            <div className="hero-action d-flex align-items-center mb-3  justify-content-center">
              <div className="hero-connect px-2 px-md-3 py-2 ">
                Connect with me
              </div>
              <div
                className="hero-resume px-2 px-md-4 py-2 "
                data-bs-toggle="modal"
                data-bs-target="#exampleModalToggle"
              >
                Resumé / CV
              </div>

              <div
                class="modal fade text-dark"
                id="exampleModalToggle"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel"
                tabindex="-1"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalToggleLabel">
                        Resumé
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      Show a second modal and hide this one with the button
                      below.
                    </div>
                    <div class="modal-footer">
                      <button
                        class="btn btn-primary"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                      >
                        Open CV
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="modal fade"
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabindex="-1"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1
                        class="modal-title fs-5"
                        id="exampleModalToggleLabel2"
                      >
                        Curriculum vitae
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      Hide this modal and show the first with the button below.
                      HELLO
                    </div>
                    <div class="modal-footer">
                      <button
                        class="btn btn-primary"
                        data-bs-target="#exampleModalToggle"
                        data-bs-toggle="modal"
                      >
                        Back to Resumé 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
