import React from "react";
import "./Project.scss";
import RPAksan from "../asset/RPAksan.JPG";
import TWSPRD from "../asset/TWSPRD.jpg";

const Project = (props) => {
  setTimeout(() => {
    console.log(document.querySelector(".content").getBoundingClientRect());
  }, 1000);
  return (
    <div id={props.id} className="project">
      <div className="header">
        <h1>MY PROJECT</h1>
      </div>
      <div className="content">
        <div
          className="content-1"
          style={{ backgroundImage: `url(${RPAksan})` }}
        >
          <div className="darker">
            <h1>UAV RACING PLANE</h1>
            <p>AKSANTARA</p>
          </div>
        </div>
        <div
          className="content-1"
          style={{
            backgroundImage: `url(${TWSPRD})`,
          }}
        >
          <div className="darker">
            <h1>TSUNAMI EWS</h1>
            <p>ITB</p>
          </div>
        </div>
        <div
          className="content-1"
          style={{ backgroundImage: `url(${RPAksan})` }}
        >
          <div className="darker">
            <h1>PROJECT NAME</h1>
            <p>ORGANIZATION</p>
          </div>
        </div>
        <div
          className="content-1"
          style={{ backgroundImage: `url(${TWSPRD})` }}
        >
          <div className="darker">
            <h1>PROJECT NAME</h1>
            <p>ORGANIZATION</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
