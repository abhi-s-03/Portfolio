import "./navbar.css";
import { DiCssdeck } from "react-icons/di";
import { Bio } from "../../data/data.js";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <DiCssdeck size="3rem" id="white" />
            <span id="navbar-logo">Portfolio</span>
          </div>
          <div className="navbar-items">
            <a href="/">About</a>
            <a href="/">Skills</a>
            <a href="/">Education</a>
            <a href="/">Experience</a>
            <a href="/">Projects</a>
          </div>
          <div className="navbar-resume">
            <a href={Bio.resume}>Resume</a>
          </div>
        </div>
      </div>
    </>
  );
}
