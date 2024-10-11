import React from 'react';
import './Contact.css'; // Make sure the file name is correct
import { FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Me</h1>
      <div className="contactInfo">
        <div className="item">
          <FaPhone className="icon" />
          <span className="text">+94 77 046 2380</span>
        </div>
        <div className="item">
          <FaMapMarkerAlt className="icon" />
          <span className="text">Colombo, Srilanka</span>
        </div>
        <div className="item">
          <FaWhatsapp className="icon" />
          <span className="text">+94 77 046 2380</span>
        </div>
        <div className="item">
          <FaFacebook className="icon" />
          <span className="text"><a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">Facebook</a></span>
        </div>
        <div className="item">
          <FaLinkedin className="icon" />
          <span className="text"><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
        </div>
        <div className="item">
          <FaInstagram className="icon" />
          <span className="text"><a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a></span>
        </div>
        <div className="item">
          <div className='slide-in-left'>
          <FaGithub className="icon" />
          <span className="text"><a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a></span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
