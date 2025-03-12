import React from "react";
import "./Hero.css";
import profile_img from "../../assets/git.png";
import resume from "../../assets/resumeJoakim.pdf";
function Hero() {
  return (
    <div className="hero">
      <img src={profile_img} alt="" className="profile-image" />
      <h1>
        <span>I'm Joakim</span>, a software engineer in Uppsala
      </h1>
      <p>
        I'm an MSc student at Uppsala University that builds multi-platform
        applications in my spare time.
      </p>
      <div className="hero-action">
        <a href="mailto:joakimjohansson.dev@gmail.com">
          <div className="hero-connect">Connect with me</div>
        </a>
        <a href={resume} download="resume.pdf">
          <div className="hero-resume">My Resume</div>
        </a>
      </div>
    </div>
  );
}

export default Hero;
