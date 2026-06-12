import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <span className="section-eyebrow">Get to know me</span>
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Web Developer with hands-on experience designing, developing, and deploying responsive websites 
              and dynamic web applications. Currently working at Gagan Apps, where I'm building a full-featured digital 
              platform with a public-facing website and multi-module admin panel.
            </p>
            <p>
              My focus is on clean code, fast performance, mobile-friendly design, and website security. I have solid 
              experience with modern web technologies and best practices in software development.
            </p>
            <div className="about-info">
              <div className="info-item">
                <span className="label">Location:</span>
                <span className="value">Guntur, India</span>
              </div>
              <div className="info-item">
                <span className="label">Email:</span>
                <span className="value">bhanuprakashnamburi553@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="label">Phone:</span>
                <span className="value">+91 7569184265</span>
              </div>
              <div className="info-item">
                <span className="label">Education:</span>
                <span className="value">B.S. in Computer Science (Data Science), Chebrolu Engineering College</span>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>8+</h3>
              <p>Months of Experience</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
