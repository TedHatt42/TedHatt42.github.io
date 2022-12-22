import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";
import "../assets/resume.pdf";
import { resume } from "../helpers/Files";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/teddy-hattenbach/">
          {" "}
          <LinkedInIcon style={{ color: "#0A66C2" }} />{" "}
        </a>
        <a href="mailto:teddyhattenbach@gmail.com">
          {" "}
          <EmailIcon style={{ color: "#EA4335" }} />{" "}
        </a>
        <a href="https://github.com/TeddyHattenbach">
          {" "}
          <GithubIcon style={{ fontSize: "5vw", color: "#171515" }} />{" "}
        </a>
      </div>
      <a href={resume} download="resume">
        Download my resume
      </a>
    </div>
  );
}

export default Footer;
