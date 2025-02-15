import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import feature_img from "../../assets/features/nicsFeature.png";
import streaky_img from "../../assets/features/streakyFeature2.png";

import './Projects.css'

const Projects = () => {
  return (
    <div className="projects">
        <h1>Personal Projects</h1>
      <div className="projects-grid">
        <ProjectCard image={feature_img} appStoreLink="https://apps.apple.com/lt/app/quit-snus-snus-stop-nics/id6739881336" playStoreLink="https://google.com"/>
        <ProjectCard image={streaky_img} appStoreLink="https://apps.apple.com/lt/app/streaky-habit-tracking/id6446580223" playStoreLink="https://play.google.com/store/apps/details?id=com.streaky.habits&hl=en"/>
      </div>
    </div>
  );
};

export default Projects;
