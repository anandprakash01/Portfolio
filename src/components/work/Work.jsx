import React from "react";
import "./work.css";

import Works from "./Works";

const Work = () => {
  return (
    <section className="work section" id="projects">
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle">Most resent works</span>

      <Works />
    </section>
  );
};

export default Work;
