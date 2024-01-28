import "./footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "../../data/data.js";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="logo">Abhishek S</div>
        <div className="social">
          <a href={Bio.linkedin} className="icon">
            <LinkedInIcon />
          </a>
          <a href={Bio.insta} className="icon">
            <InstagramIcon />
          </a>
          <a href={Bio.github} className="icon">
            <GitHubIcon />
          </a>
        </div>
        <div className="copy">&copy; 2024 Abhishek S</div>
      </div>
    </>
  );
}
