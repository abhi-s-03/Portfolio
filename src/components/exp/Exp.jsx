import "./exp.css";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { experiences } from "../../data/data.js";
export default function Exp() {
  return (
    <>
      <div id="exp">
        <div className="wrapper">
          <div className="edu-title">Experience</div>
          <div className="edu-content">
            <Timeline>
              {experiences.map((item,index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot
                      variant="outlined"
                      color="primary"
                      style={{ borderColor: "#00bfff" }}
                    />
                    <TimelineConnector style={{ background: "#306EE8" }} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="edu-card">
                      <div className="educard-top">
                        <div className="educard-body">
                          <div className="educard-name">{item.company}</div>
                          <div className="educard-degree">{item.role}</div>
                          <div className="educard-date">{item.date}</div>
                        </div>
                      </div>
                      <div className="educard-desc">
                        <span>{item.desc}</span>
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </div>
    </>
  );
}
