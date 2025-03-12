import React from "react";
import "./Contact.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="social">
        <a
          href="https://www.linkedin.com/in/joakim-johansson-a992b1210/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={50}
            className="text-blue-600 hover:text-blue-800"
            color="white"
          />
        </a>
        <a
          href="https://github.com/joakim-johansson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            size={50}
            className="text-gray-800 hover:text-gray-600"
            color="white"
          />
        </a>
      </div>

      <div className="contact-left">
        <div className="contact-details">
          <div className="contact-detail">
            <CallIcon className="contact-icon" />
            <p>072-2222-3635</p>
          </div>
          <div className="contact-detail">
            <EmailIcon className="contact-icon" />
            <p>joakimjohansson.dev@gmail.com</p>
          </div>
          <div className="contact-detail">
            <LocationOnIcon className="contact-icon" />
            <p>Uppsala, Sweden</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
