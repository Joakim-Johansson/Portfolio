import React from "react";
import "./Contact.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Address</h1>
          <p>I'm currently available</p>
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
        <form className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name"/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your email" name="email"/>
            <label htmlFor="">Write your Message</label>
            <textarea name="message" id="" rows="8" placeholder="Enter your message"></textarea>
            <button className="contact-submit" type="submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
