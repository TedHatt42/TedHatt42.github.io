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
            413-822-5776
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>About me</h1>
        <ol className="list">
          <li className="item">
            <h2>Summary</h2>
            <span>
            I have over two years of experience as a Software Developer
            and am a recent graduate of Northeastern University.
            </span>
          </li>
          <li className="item">
            <div className="recent">
              <h2>My experience</h2>
            </div>
            <span>
            After studying computer science for four years at college, I was eager to apply my knowledge.
            I competed in a hackathon and placed third out of seventy groups for Python software
            that predicts stock prices. I am now in a team to create a platform for social activists
            to refine communication.
            <br /><br />
            I have been actively using my skills to improve client experience during my jobs.
            I am implementing code requirements with Python for Outlaw Technology’s web console
            and ensuring a high-quality experience for users to view and manage data.
            During my internship at Paragon Data Labs, I established several new customer actions in Java
            and significantly optimized the transfer of user data to the company database.

            
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              Python, JavaScript, Java, SQL, Typescript
              </span>
          </li>
          <li className="item">
            <h2>Technologies</h2>
            <span>
              HTML, CSS, Git, AWS
            </span>
          </li>
          <li className="item">
            <h2>Software</h2>
            <span>
              GitHub, Visual Studio Code, Linux, DBeaver, Postman, Jupyter Notebook
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
