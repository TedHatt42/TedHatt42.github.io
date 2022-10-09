import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { profilePic } from "../helpers/Files";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>
          {" "}
          <img src={profilePic} alt="Teddy Hattenbach" /> Teddy Hattenbach
        </h2>
        <div className="prompt">
          <p>A software developer excited to learn and create.</p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/teddy-hattenbach/">
              {" "}
              <LinkedInIcon style={{ fontSize: "5vw" }} />{" "}
            </a>
            <a href="mailto:teddyhattenbach@gmail.com">
              {" "}
              <EmailIcon style={{ fontSize: "5vw" }} />{" "}
            </a>
            <a href="https://github.com/TeddyHattenbach">
              {" "}
              <GithubIcon style={{ fontSize: "5vw" }} />{" "}
            </a>
          </div>
          <div className="contact">
            teddyhattenbach@gmail.com
            <br />
            203-979-7419
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>About me</h1>
        <ol className="list">
          <li className="item">
            <h2>Highlight</h2>
            <span>
              I completed and placed third place best hack in the 2021 HackBU
              hackathon by developing software that enabled software users to
              enter stock values to predict ET Stock Market price changes.
            </span>
          </li>
          <li className="item">
            <div className="recent">
              <h2>Recent Experience</h2>
            </div>
            <span>
              I interned for Paragon Data Labs, a tech company that provides
              financial services firms with compliance software. During my
              internship, I worked on the backend development for the software
              to establish several new customer actions. I also engaged in a
              data engineering project to automate the process in which input
              data transfers to Paragon’s database, resulting in a significant
              increase in efficiency. Finally, I quality-tested the front-end
              user interface and improved customer experience by bug-fixing
              dozens of issues.
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Java, Python, Typescript, JavaScript, MySQL, LaTeX</span>
          </li>
          <li className="item">
            <h2>Software</h2>
            <span>
              IntelliJ IDEA, GitHub, Visual Studio Code, Jupyter Notebook,
              Eclipse, Jira, Confluence
            </span>
          </li>
          <li className="item">
            <h2>Technologies</h2>
            <span>Git, React.js, CSS, HTML, Jest, AWS</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;