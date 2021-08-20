import React from "react";
import "./Footer.scss";
import { IconGithub, IconInstagram, IconLinkedin } from "../asset/icon";

const Footer = () => {
  return (
    <div className="footer">
      <div className="header">
        <h1>OCTAVIANUS</h1>
      </div>
      <div className="icon-placebox">
        <span className="dot">
          <IconLinkedin className="icon" />
        </span>
        <span className="dot">
          <IconInstagram className="icon" />
        </span>
        <span className="dot">
          <IconGithub className="icon" />
        </span>
      </div>
      <div className="copyright">© 2021 Octavianus | All rights reserved.</div>
    </div>
  );
};
export default Footer;
