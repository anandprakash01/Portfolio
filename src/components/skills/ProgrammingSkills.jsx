import React from "react";

const ProgrammingSkills = () => {
  const skillset = [
    {skill: "Java", level: "Intermideate"},
    {skill: "DSA", level: "Intermideate"},
    {skill: "OOPs", level: "Intermideate"},
  ];

  return (
    <div className="skills_content">
      <h3 className="skills_title">Programming Skills</h3>

      <div className="skills_box">
        {skillset.map((item, index) => {
          return (
            <div className="skills_group" key={index}>
              <div className="skills_data">
                <i className="bx bxs-badge-check"></i>
                <div>
                  <h3 className="skills_name">{item.skill}</h3>
                  <span className="skills_level">{item.level}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgrammingSkills;
