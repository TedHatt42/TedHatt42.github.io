import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const devPost =
    project.name === "ET Stock Predictor" ? <img src={project.devPost} alt="project" /> : null;
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="project" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className="devPost">
      <a href = {project.gitHubLink}> <GitHubIcon /></a>
        <a href="https://devpost.com/software/et-stock-prediction"> {devPost} </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
