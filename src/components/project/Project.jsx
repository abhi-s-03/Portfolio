import "./project.css";
import { projects } from "../../data/data.js";

export default function Project() {
  return (
    <>
      <div id="project">
        <div className="wrapper">
          <div className="edu-title" style={{ paddingBottom: "24px" }}>
            Projects
          </div>
          <div className="project-container">
            {projects.map((item, index) => (
              <div className="project-card" key={index}>
                <div className="project-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="project-tag">
                  {item.tags?.map((tag, index) => (
                    <span className="tag" key={index}>{tag}</span>
                  ))}
                </div>
                <div className="project-body">
                  <div className="project-name">{item.title}</div>
                  <div className="project-desc">{item.description}</div>
                  <div className="project-link">
                    <div className="git">
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noreferrer"
                        id="git"
                      >
                        GitHub
                      </a>
                    </div>
                    <div className="live">
                      {item.demo && (
                        <a
                          href={item.demo}
                          target="_blank"
                          rel="noreferrer"
                          id="live"
                        >
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
