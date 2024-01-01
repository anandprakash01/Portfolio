import React from "react";

const Backend = () => {
  const skillLang = [{skill: "Node js", level: "Basic"}];

  const skillTech = [{skill: "Firebase", level: "Basic"}, ,];

  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend developer</h3>

      <div className="skills_box">
        <div className="skills_group">
          {skillLang.map((item, index) => {
            return (
              <div className="skills_data" key={index}>
                <i className="bx bxs-badge-check"></i>
                <div>
                  <h3 className="skills_name">{item.skill}</h3>
                  <span className="skills_level">{item.level}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="skills_group">
          {skillTech.map((item, index) => {
            return (
              <div className="skills_data" key={index}>
                <i className="bx bxs-badge-check"></i>
                <div>
                  <h3 className="skills_name">{item.skill}</h3>
                  <span className="skills_level">{item.level}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Backend;
