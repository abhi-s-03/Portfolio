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
            <a href="#about">About</a>
            <a href="#skill">Skills</a>
            <a href="#edu">Education</a>
            <a href="#exp">Experience</a>
            <a href="#project">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="navbar-resume">
            <a href={Bio.resume}>Resume</a>
          </div>
        </div>
      </div>
    </>
  );
}
