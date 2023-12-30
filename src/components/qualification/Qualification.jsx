import React, {useState} from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = index => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            onClick={() => {
              toggleTab(1);
            }}
            className={
              toggleState === 1
                ? "qualification_button qualification_active button-flex"
                : "qualification_button button-flex"
            }
          >
            <i className="uil uil-graduation-cap qualification_icon"></i> Education
          </div>

          <div
            onClick={() => {
              toggleTab(2);
            }}
            className={
              toggleState === 2
                ? "qualification_button qualification_active button-flex"
                : "qualification_button button-flex"
            }
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i> Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">B.Tech</h3>
                <span className="qualification_subtitle">Shuats, Prayagraj (UP)</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>
                  2016-2020
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Intermediate</h3>
                <span className="qualification_subtitle">Shahdol, MP</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>
                  2014-2015
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Matriculation</h3>
                <span className="qualification_subtitle">Shahdol, MP</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>
                  2012-2013
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Fresher</h3>
                <span className="qualification_subtitle"></span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
