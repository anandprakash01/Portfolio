import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Anand</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer_link">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.instagram.com/hr_anand/"
            className="footer_social-link"
            target={"_blank"}
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/hranand/"
            className="footer_social-link"
            target={"_blank"}
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/anandprakash01"
            className="footer_social-link"
            target={"_blank"}
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="
https://wa.me/7047867712?text=Hi,%20I’m%20looking%20for%20a%20website%20developer%20for%20my%20new%20business.%20I%20love%20your%20portfolio%20and%20style,%20and%20I%20would%20like%20to%20know%20if%20you%20are%20available.%20Could%20you%20also%20give%20me%20a%20quote%20for%20your%20services%20?%20I%20appreciate%20your%20response."
            className="footer_social-link"
            target={"_blank"}
          >
            <i className="bx bxl-whatsapp"></i>
          </a>

          {/* <a href="" className="footer_social-link" target={"_blank"}>
            <i className="bx bxl-dribbble"></i>
          </a> */}
        </div>

        <span className="footer_copyright">&#169; anandprakash. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
