import React from "react";
import "./ProjectDetails.scss";
import { AiOutlineLink } from "react-icons/ai";

import { urlFor } from "../../client";

function Detils({ project }) {
  const {
    img,
    projec_live_link,
    projectFeatures,
    projectSubtitle,
    projectTechnologies,
    projectTitle,
    project_client_repo_link,
    project_server_repo_link,
  } = project;

  return (
    <div className="project">
      <div className="project__title">
        <h1 className="project__title--main">{projectTitle}</h1>
        <p className="project__title--sub">{projectSubtitle}</p>
      </div>
      <div className="project__link">
        <div className="project__link--live">
          <span style={{ marginRight: ".3rem" }}>
            <AiOutlineLink />
          </span>
          <a href={projec_live_link} target="_blank">
            Live Site
          </a>
        </div>
        <div className="project__link--client">
          <span style={{ marginRight: ".3rem" }}>
            <AiOutlineLink />
          </span>
          <a href={project_client_repo_link} target="_blank">
            Client Repository
          </a>
        </div>
        {project.project_server_repo_link ? (
          <div className="project__link--server">
            <span style={{ marginRight: ".3rem" }}>
              <AiOutlineLink />
            </span>
            <a href={project_server_repo_link} target="_blank">
              Server Repository
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
      <h3 className="project__screenshots--title title">Screenshots</h3>
      <div className="project__screenshots">
        <img src={urlFor(img[0])} alt="photo" />
        <img src={urlFor(img[1])} alt="photo" />
        <img src={urlFor(img[2])} alt="photo" />
      </div>
      <div className="project__features">
        <h3 className="title">Features</h3>
        <ul className="project__features--des">
          {projectFeatures.map((feture) => (
            <li>{feture}</li>
          ))}
        </ul>
      </div>
      <div className="project__technologies">
        <h3 className="title">Technologies Used</h3>
        <p className="des">{projectTechnologies}</p>
      </div>
    </div>
  );
}

export default Detils;
