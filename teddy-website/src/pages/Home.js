import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { profilePic } from "../helpers/HomeImage";

function Home() {
  return (
    <div className="home">
      <div className="about">
        
        <h2> <img src={profilePic} alt="Teddy Hattenbach" /> Teddy Hattenbach</h2>
        <div className="prompt">
          <p>A software developer excited to learn and create.</p>
          <a href="https://www.linkedin.com/in/teddy-hattenbach/"> <LinkedInIcon /> </a>
          <a href="mailto:teddyhattenbach@gmail.com"> <EmailIcon /> </a> 
          <a href="https://github.com/TeddyHattenbach"> <GithubIcon /> </a>
        </div>
      </div>
      <div className="skills">
        <h1> About me</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
            I interned for Paragon Data Labs, a tech company that provides financial services firms with compliance software. 
            During my internship, I worked on the backend development for the software to establish several new customer actions. 
            I also engaged in a data engineering project to automate the process in which input data transfers to Paragon’s database, 
            resulting in a significant increase in efficiency. 
            Finally, I quality-tested the front-end user interface and improved customer experience by bug-fixing dozens of issues.

            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
