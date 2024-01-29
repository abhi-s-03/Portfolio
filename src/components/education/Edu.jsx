import "./edu.css";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { education } from "../../data/data.js";
export default function Edu() {
  return (
    <>
      <div id="edu">
        <div className="wrapper">
          <div className="edu-title">Education</div>
          <div className="edu-content">
            <Timeline>
              {education.map((item) => (
                <TimelineItem>
                  <TimelineContent>
                    <div
                      className="edu-card"
                      style={{ border: "0.1px solid #854ce6" }}
                    >
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
                  </TimelineContent>
                  <TimelineSeparator>
                    <TimelineDot
                      variant="outlined"
                      color="secondary"
                      style={{ marginRight: "20px" }}
                    />
                    <TimelineConnector
                      style={{ background: "#854CE6", marginRight: "20px" }}
                    />
                  </TimelineSeparator>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </div>
    </>
  );
}
