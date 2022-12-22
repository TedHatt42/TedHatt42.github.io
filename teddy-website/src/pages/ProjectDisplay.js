import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import DevPost from "../assets/DevPost.jpg";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const devPost =
    project.name === "ET Stock Predictor" ? (
      <img src={DevPost} alt="project" />
    ) : null;
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="project" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className="devPost">
        <a href={project.devPostLink}> {devPost} </a>
        <a href={project.gitHubLink}>
          {" "}
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
