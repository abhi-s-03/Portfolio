import "./hero.css";
import Animation from "./animation.jsx";
import { Bio } from "../../data/data.js";
import Typewriter from "typewriter-effect";
import profile from "../../assets/profile.jpg";
export default function Hero() {
  return (
    <>
      <div id="about">
        <div className="hero-container">
          <div className="hero-animation">
            <Animation />
          </div>
          <div className="hero-info">
            <div className="hero-left">
              <div className="name">
                <span>Hi, I am </span>
                <br></br>
                <span>{Bio.name}</span>
              </div>
              <div className="role">
                I am a
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <div className="biodesc">{Bio.description}</div>
            </div>
            <div className="hero-right">
              <div className="hero-img">
                <img src={profile} alt="hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
