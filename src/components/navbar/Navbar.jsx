import "./navbar.css";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/data.js";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <DiCssdeck size="3rem" id="white" />
            <span id="navbar-logo">Portfolio</span>
          </div>
          <div className="mobileicon">
            <FaBars
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
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
          {isOpen && (
            <div className="mobile-navbar-items">
              <a
                href="/"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                About
              </a>
              <a
                href="/"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Skills
              </a>
              <a
                href="/"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Education
              </a>
              <a
                href="/"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Experience
              </a>
              <a
                href="/"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Projects
              </a>
              <a href={Bio.resume}>Resume</a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
