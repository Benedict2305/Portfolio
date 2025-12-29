import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

import "./Contact.css";
import '../components/General_style.css'
const Contact = () => {

  const formRef = useRef();

  const sendEmailFuction = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_ij9q2tc', 'template_ewce1fu',formRef.current, 'JrOG4wDMua7R0X0ZQ')
    .then(()=>{
      alert('Message sent successfully');
      formRef.current.reset()
    },
    (error)=>{
      alert('Failed to send message, please try again', error.text
      )
    }
  )
  }
  return (
    <section id="contact" className="container-fluid  px-md-5">
      <div className="row ">
        <div className="GetInTouch-title d-flex justify-content-center mx-auto align-items-center mt-2 mb-2">
          <span className="fw-bolder ">Get In Touch</span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6  ourLandinAnimate2">
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
                <i class="bi bi-envelope-at me-2 getInTouchIcon"></i>
                Benidzy.bi@gmail.com
              </p>
            </div>
            <div className="contact-detail">
              <p>
                <i class="bi bi-telephone-forward me-2 getInTouchIcon"></i>
                +2347067979657
              </p>
            </div>
            <div className="contact-detail">
              <p>
                <i class="bi bi-geo-alt me-2 getInTouchIcon"></i>Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 scaleAnimeContactForm ">
          <form className="d-flex flex-column align-items-start gap-2 formContent" ref={formRef} onSubmit={sendEmailFuction}>
            <label htmlFor="yourName">Your Name</label>
            <input
              type="text"
              id="yourName"
              placeholder="Enter Your Name"
              name="user_name"
            />
            <label htmlFor="yourEmail">Your Email</label>
            <input
              type="email"
              id="yourName"
              placeholder="Enter Your Email"
              name="user_email"
            />
            <label htmlFor="yoursubject">Subject</label>
            <input
              type="text"
              id="yoursubject"
              placeholder="Enter Your Email"
              name="subject"
            />
            <label htmlFor="yourmessage">Write your message here</label>
            <textarea
            id="yourmessage"
              name="message"
              placeholder="Enter your Message "
              rows="3"
              className="w-100 p-2"
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
