import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [navbarclass, setNavbarclass] = useState("forheader");

  const changeheaderclass = () => {
    let tempTop = document.getElementById("header").getBoundingClientRect().top;
    let height = document
      .getElementById("header")
      .getBoundingClientRect().height;

    if (-tempTop >= height) {
      setNavbarclass("otherheader");
    } else {
      setNavbarclass("forheader");
    }
  };

  document.addEventListener("scroll", changeheaderclass);

  const openTheNavbar = () => {
    setTimeout(() => {
      document.querySelector(".container-link").style.display = "flex";
      setTimeout(() => {
        document.querySelector(".container-link").style.height = "30vh";
      }, 10);
    }, 10);
  };

  const closeTheNavbar = () => {
    setTimeout(() => {
      document.querySelector(".container-link").style.height = "0";
      setTimeout(() => {
        document.querySelector(".container-link").style.display = "none";
      }, 400);
    }, 10);
  };

  setTimeout(() => {
    const menuBtn = document.querySelector(".button");
    let menuOpen = false;
    menuBtn.addEventListener("click", () => {
      if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
        openTheNavbar();
      } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
        closeTheNavbar();
      }
    });
    document.addEventListener("scroll", () => {
      menuBtn.classList.remove("open");
      menuOpen = false;
      closeTheNavbar();
    });
  }, 100);

  return (
    <div id="thisisnavbar" className={`container-navbar ${navbarclass}`}>
      <div className={`navbar`}>
        <div className="leftSide">
          <h1>OCTAVIANUS</h1>
        </div>
        <div className="rightSide">
          <div className="links">
            <div className="list-for-header">
              <a href="#header">Home</a>
            </div>
            <div className="list-for-header">
              <a href="#biodata">About</a>
            </div>
            <div className="list-for-header">
              <a href="#timeline">Experience</a>
            </div>
            <div className="list-for-header">
              <a href="#project">Project</a>
            </div>
            <div className="button">
              <div className="button-burger"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-link">
        <a className="foropacity" href="#header">
          Home
        </a>
        <a className="foropacity" href="#biodata">
          About
        </a>
        <a className="foropacity" href="#timeline">
          Experience
        </a>
        <a className="foropacity" href="#project">
          Project
        </a>
      </div>
    </div>
  );
};

export default Navbar;
