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
              <LinkedInIcon
                style={{ fontSize: "5vw", color: "#0A66C2" }}
              />{" "}
            </a>
            <a href="mailto:teddyhattenbach@gmail.com">
              {" "}
              <EmailIcon style={{ fontSize: "5vw", color: "#EA4335" }} />{" "}
            </a>
            <a href="https://github.com/TeddyHattenbach">
              {" "}
              <GithubIcon style={{ fontSize: "5vw", color: "#171515" }} />{" "}
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
              I placed 3rd best in HackBU 2021 by collaborating with three
              people on software that enabled users to enter stock values to
              predict ET Stock Market price changes.
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
              in Java to establish several new customer actions. I also engaged
              in a data engineering project to automate the process using MySQL
              in which user-provided data transfers to Paragon’s database,
              resulting in a significant increase in efficiency. Finally, I
              quality-tested the front-end user interface to improve customer
              experience and tracked these issues through Jira.
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Java, Python, SQL, Typescript, JavaScript, R, LaTeX</span>
          </li>
          <li className="item">
            <h2>Software</h2>
            <span>
              React.js, HTML, CSS, Git, MySQL, Flask, JUnit, Jest, AWS
            </span>
          </li>
          <li className="item">
            <h2>Technologies</h2>
            <span>
              Eclipse IDE, Jira, Visual Studio Code, Docker, GitHub, IntelliJ
              IDEA, Jupyter Notebook
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
