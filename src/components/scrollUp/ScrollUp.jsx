import React from "react";
import "./scrollUp.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollUp");
    // when the scroll is heigher than 560 viewport height, add the show-scroll class to a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });

  return (
    <a href="#" className="scrollUp">
      <i className="uil uil-arrow-up scrollUp_icon"></i>
    </a>
  );
};

export default ScrollUp;
