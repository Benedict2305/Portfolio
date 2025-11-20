import React from "react";
import "./MyWork.css";

import mywork_data from "../components/mywork_data";
const MyWork = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="myWork-title d-flex justify-content-center mx-auto align-items-center my-5">
          <p className="fw-bolder">My Latest Work</p>
        </div>
      </div>
      <div className="row">
        <div className="col ">
          <div className="d-flex gap-3 justify-content-center ">
            {mywork_data.map((myworks, index) => {
              return (
                <div className="myworkImageDiv">
                  <img
                    key={index}
                    src={myworks.w_img}
                    alt=""
                    className="rounded"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
