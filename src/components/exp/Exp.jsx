import "./exp.css";
import { experiences } from "../../data/data.js";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Professional Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div className="experience-company">{exp.company}</div>
              <div className="experience-date">{exp.date}</div>
            </div>
            <h3 className="experience-role">{exp.role}</h3>
            {exp.desc && <p className="experience-desc">{exp.desc}</p>}
            {exp.skills && (
              <div className="experience-skills">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
