"use client";

import React from "react";

import Hero from "./_parts/hero";
import GeneralDescription from "./_parts/generaldescription";

import { ProjectsDetail } from "@/datas";
import ProjectOverview from "./_parts/projectoverview";

const ProjectDetail = ({ params }) => {
  const [project, setProject] = React.useState({
    title: "test",
    description: "",
    website: "",
    github: "",
    desc1: "",
    desc2: "",
    techstack: [],
    thumbnail: "",
    galery: [],
  });

  React.useEffect(() => {
    // Check if ProjectsDetail exists and if params is valid
    if (ProjectsDetail && ProjectsDetail.length > 0 && params && params.id) {
      // Make sure to convert params.id to a number
      const projectId = parseInt(params.id, 10);
      // Make sure projectId is a valid index in ProjectsDetail array
      if (
        !isNaN(projectId) &&
        projectId >= 1 &&
        projectId <= ProjectsDetail.length
      ) {
        // Update the project state
        setProject(ProjectsDetail[projectId - 1]);
      } else {
        console.error("Invalid project ID:", params.id);
      }
    } else {
      console.error(
        "ProjectsDetail is missing or params.id is invalid:",
        ProjectsDetail,
        params
      );
    }
  }, [params]);

  return (
    <>
      <Hero
        title={project.title}
        description={project.description}
        website={project.website}
        github={project.github}
        thumbnail={project.thumbnail}
        alt={project.alt}
      />
      <GeneralDescription
        description1={project.desc1}
        description2={project.desc2}
        tech={project.techstack}
      />
      <ProjectOverview galery={project.galery} />
    </>
  );
};

export default ProjectDetail;
