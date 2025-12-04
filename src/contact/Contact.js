import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="container-xl mb-5">
      <div className="row">
        <div className="GetInTouch-title d-flex justify-content-center mx-auto align-items-center my-3">
          <p className="fw-bolder">Get In Touch</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="contact-briefing">
            <h1>Let's Talk</h1>
            <p>
              I'm currently available to take on a new project, so feel free to
              message me about anything you want me to work on. You can contact
              anytime.
            </p>
          </div>
          <div className="contact-details">
            <div className="contact-detail">
              <p className="">
                <i class="bi bi-envelope-at me-2 getInTouchIcon"></i>{" "}
                Benidzy.bi@gmail.com
              </p>
            </div>
            <div className="contact-detail">
              <p>
                <i class="bi bi-telephone-forward me-2 getInTouchIcon"></i>{" "}
                +2347067979657
              </p>
            </div>
            <div className="contact-detail">
              <p>
                <i class="bi bi-geo-alt me-2 getInTouchIcon"></i>Lagos, Nigeria{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <form className="d-flex flex-column align-items-start gap-2 formContent">
            <label htmlFor="yourName">Your Name</label>
            <input
              type="text"
              id="yourName"
              placeholder="Enter Your Name"
              name="name"
            />
            <label htmlFor="yourEmail">Your Email</label>
            <input
              type="email"
              id="yourName"
              placeholder="Enter Your Email"
              name="email"
            />
            <label htmlFor="message">Write your message here</label>
            <textarea
              name="message"
              placeholder="Enter your Message "
              rows="4"
              className="w-100 p-3"
            ></textarea>
            <button
              type="submit"
              className="submitBtn border-0 rounded-pill px-4 py-1 fs-5 fw-bolder mt-3"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
