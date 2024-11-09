import React from 'react'
import { FaMailBulk } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../style/contact.css"

const Contact = () => {
    return (
      <div id="contact" className="contact-container">
        <div className="grid-container">
          <div className="spacing-container">
            <div className="input-group">
              <h2 className="heading">Order now</h2>
              <label htmlFor="name">Name:</label>
              <input type="text" className="input-field" id="name" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="text" className="input-field" id="email" />
            </div>
            <div className="input-group">
              <label htmlFor="msg">Message:</label>
              <textarea className="textarea-field" id="msg" rows={8}></textarea>
            </div>
            <div>
              <button className="submit-button" data-aos="zoom-in-up">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default Contact
