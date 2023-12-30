import React from "react";

const Frontend = () => {
  const skillLang = [
    {skill: "HTML", level: "Intermideate"},
    {skill: "CSS", level: "Intermideate"},
    {skill: "JavaScript", level: "Intermideate"},
  ];

  const skillTech = [
    {skill: "React", level: "Intermideate"},
    {skill: "Tailwind CSS", level: "Intermideate"},
    {skill: "Bootstrap", level: "Intermideate"},
    {skill: "Github", level: "Intermideate"},
  ];

  return (
    <div className="skills_content">
      <h3 className="skills_title">Frontend developer</h3>

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

export default Frontend;
