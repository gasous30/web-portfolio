import React from "react";
import "./App.scss";
import Header from "./header/Header";
import Biodata from "./biodata/Biodata";
import Timeline from "./timeline/Timeline";
import Project from "./project/Project";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

const App = () => {
  return (
    <div className="main-page" id="the_div_id">
      <Navbar />
      <Header id="header" />
      <Biodata id="biodata" />
      <Timeline id="timeline" />
      <Project id="project" />
      <Footer />
    </div>
  );
};

export default App;
