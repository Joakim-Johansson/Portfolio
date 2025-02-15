import React from "react";
import "./ProjectCard.css";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

const ProjectCard = ({ image, link, appStoreLink, playStoreLink }) => {
  return (
    <div className="project-card">
      <img src={image} className="card-image" />
      <div className="overlay"> 
        <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
          <FaAppStoreIos className="store-logo" size={50} />
        </a>
        <a href={playStoreLink} target="_blank" rel="noopener noreferrer">
          <FaGooglePlay className="store-logo" size={50} />
        </a>
      </div>

    </div>
  );
};

export default ProjectCard;
