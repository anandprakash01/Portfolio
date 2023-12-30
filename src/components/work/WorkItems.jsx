import React from "react";

const WorkItems = ({item}) => {
  return (
    <div className="work_card" key={item.id}>
      <div className="work_img">
        <img src={item.image} alt="" className="work_img-pic" />
        <div className="work_img-hover-content">
          <a href={item.link} className="work_button" target="_blank">
            View Project <i className="bx bx-right-arrow-alt work_button-icon"></i>
          </a>
        </div>
      </div>
      <h3 className="work_title">{item.title}</h3>
      <div className="work_description">{item.description}</div>

      <a href={item.link} className="work_button" target="_blank">
        Live demo <i className="bx bx-right-arrow-alt work_button-icon"></i>
      </a>
      <a href={item.github} className="work_button" target="_blank">
        Github Code <i className="bx bx-right-arrow-alt work_button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
