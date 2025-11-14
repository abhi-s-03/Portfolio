import "./edu.css";
import { education } from "../../data/data.js";

export default function Edu() {
  return (
    <>
      <div id="edu">
        <div className="wrapper">
          <div className="edu-title">Education</div>
          <div className="edu-content">
            {education.map((item, index) => (
              <div key={index} className="edu-card">
                <div className="educard-top">
                  <div className="educard-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="educard-body">
                    <div className="educard-name">{item.school}</div>
                    <div className="educard-degree">{item.degree}</div>
                    <div className="educard-date">{item.date}</div>
                  </div>
                </div>
                <div className="educard-grade">{item.grade}</div>
                <div className="educard-desc">
                  <span>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
