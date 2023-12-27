import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i className="bx bx-award about_icon"></i>
        <h3 className="about_title">Exprience</h3>
        <span className="about_subtitle">101+ Years of Working</span>
      </div>

      <div className="about_box">
        <i className="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">1000+ Project</span>
      </div>

      <div className="about_box">
        <i className="bx bx-support about_icon"></i>
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
