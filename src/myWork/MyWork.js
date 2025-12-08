import React from "react";
import "./MyWork.css";
import "../index.css";

import mywork_data from "../components/mywork_data";

const MyWork = () => {

  const handleClick = (eachUrl) =>{
      window.open(eachUrl, '_blank');
    };
  return (
    
    <section className=" pt-4" style={{backgroundColor:'#280b08'}}>
      <div className="myWork-title d-flex justify-content-center mx-auto align-items-center pt-1 mb-5 ">
        <p className="fw-bolder">My Latest Work</p>{" "}
      </div>

      <div className=" d-md-flex justify-content-center gap-5 flex-wrap pb-5 " style={{backgroundColor:'#280b08'}}>
        {mywork_data.map((portfolio, index) => {
          return (
            <div
              className="col-lg-3 col-11 col-md-5 card mb-4 mb-md-0"
              key={index}
            >
              <img src={portfolio.w_img} alt="" />
              <div className="info">
                <h1>{portfolio.w_name}</h1>
                <p>{portfolio.w_detail}</p>

                <article className="" style={{width:'fit-content', background:'transparent'}} >
                    <input
                      type="button"
                      value="View Demo"
                      className="btn bg-danger text-white fw-bolder"
                      onClick={() =>handleClick(portfolio.w_buttonUrl)}
                    />
                  
                </article>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MyWork;
