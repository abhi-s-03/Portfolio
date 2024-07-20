import "./skill.css";
import { skills } from "../../data/data.js";

export default function Skill() {
  return (
    <>
      <div id="skill">
        <div className="skill-wrapper">
          <div className="skill-title">Skills</div>
          <div className="skill-container">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-area">{skill.title}</div>
                <div className="skill-list">
                  {skill.skills.map((item, index) => (
                    <div className="skill-item" key={index}>
                      <img src={item.image}></img>
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
