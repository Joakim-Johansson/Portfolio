import React from "react";
import "./Hero.css";
import profile_img from '../../assets/git.png'

function Hero() {
  return (
    <div className="hero">
      <img src={profile_img} alt="" className="profile-image"/>
      <h1><span>I'm Joakim</span>, a software engineer in Uppsala</h1>
      <p>I'm an MSc student at Uppsala University that builds multi-platform applications in my spare time.</p>
      <div className="hero-action">
        <div className="hero-connect">
            Connect with me
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;
