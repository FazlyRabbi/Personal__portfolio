import React, { useEffect } from "react";
import Detils from "./Detils";
import { client } from "../../client";
import { Navbar } from "../../componests";
import { useState } from "react";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  const [projects, setProject] = useState([]);

  const { title } = useParams();

  useEffect(() => {
    const query = `*[_type == "projectDetails" && projectTitle == "${title}"]`;

    client.fetch(query).then((data) => {
      setProject(data);
    });
  }, []);

  return (
    <div>
      <Navbar
        position={"sticky"}
        boxShadow={`0 8px 32px 0 rgba(82, 81, 81, 0.089)`}
      />
      {projects.map((project) => (
        <Detils project={project} kay={project._id} />
      ))}
    </div>
  );
}

export default ProjectDetails;
