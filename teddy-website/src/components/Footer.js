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
          <LinkedInIcon />{" "}
        </a>
        <a href="mailto:teddyhattenbach@gmail.com">
          {" "}
          <EmailIcon />{" "}
        </a>
        <a href="https://github.com/TeddyHattenbach">
          {" "}
          <GithubIcon />{" "}
        </a>
      </div>
      <a href={resume} download="resume">
        Download my resume
      </a>
    </div>
  );
}

export default Footer;
