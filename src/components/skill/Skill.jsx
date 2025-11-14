import "./skill.css";
import { skills } from "../../data/data.js";

export default function Skill() {
  return (
    <section id="skill">
      <div className="skill-wrapper">
        <h2 className="skill-title">Skills</h2>
        <div className="skill-container">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <h3 className="skill-area">{skill.title}</h3>
              <div className="skill-list">
                {skill.skills.map((item, index) => (
                  <div className="skill-item" key={index}>
                    <img 
                      src={item.image} 
                      alt={item.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb2RlIj48cG9seWxpbmUgcG9pbnRzPSIxNiAxOCA2IDEyIDYgMTIgMTYgNiIvPjwvc3ZnPg==";
                      }}
                    />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
