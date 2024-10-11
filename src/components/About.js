// src/About.js
import React from 'react';
import { FaBook, FaCode, FaLaptop, FaLock, FaShoppingCart, FaGraduationCap } from 'react-icons/fa'; // Import icons
import './About.css';  // Your CSS file

const About = () => {
  return (
    <div className="about-container">
      <section className="section academic-section">
        <h2 className="fade-in">
          <FaGraduationCap className="icon" /> Academic Details
        </h2>
        <ul className="fade-in">
          <li>(BIT) Hons in Network & Mobile Computing, Horizon Campus, Malabe (2021 - Present)</li>
          <li>GCE A/L (2019): Technology Stream </li>
          <li>Certifications: Python for Beginners, Introduction to Cybersecurity</li>
        </ul>
      </section>

      <section className="section projects-section">
        <h2 className="slide-in-left">
          <FaLaptop  className="icon" /> Projects & Technology
        </h2>
        <ul className="slide-in-left">
          <li>IMDB Movies Filter</li>
          <span><strong>CSV file handling in PHP, HTML/CSS for displaying results.</strong></span>
        </ul>
      </section>

      <section className="section projects-section">
        <h2 className="slide-in-right">
          <FaLaptop className="icon" /> Projects & Technology
        </h2>
        <ul className="slide-in-right">
          <li>Personal Web Page About Myself</li>
          <span><strong>HTML, CSS, JavaScript, JQuery, and Bootstrap.</strong></span>
        </ul>
      </section>

      <section className="section projects-section">
        <h2 className="slide-in-left">
          <FaLaptop  className="icon" /> Projects & Technology
        </h2>
        <ul className="slide-in-left">
          <li>Linux User Management and File Operations</li>
          <span><strong>Linux, Bash (for shell scripting), Basic Linux commands for file and user management.</strong></span>
        </ul>
      </section>

      <section className="section projects-section">
        <h2 className="slide-in-right">
          <FaLaptop  className="icon" /> Projects & Technology
        </h2>
        <ul className="slide-in-right">
          <li>Online Shopping Application</li>
          <span><strong>Java, Android Studio.</strong></span>
        </ul>
      </section>
    </div>
  );
};

export default About;
