import "./skill.css";
import { skills } from "../../data/data.js";

export default function Skill() {
  return (
    <>
      <div id="skill">
        <div className="wrapper">
          <div className="skill-title">Skills</div>
          <div className="skill-container">
            {skills.map((skill) => (
              <div className="skill">
                <div className="skill-area">{skill.title}</div>
                <div className="skill-list">
                  {skill.skills.map((item) => (
                    <div className="skill-item">
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
