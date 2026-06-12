import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <span className="blob blob-1"></span>
        <span className="blob blob-2"></span>
        <span className="blob blob-3"></span>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-greeting">👋 Hello, welcome to my world</p>
          <h1>
            Hi, I'm <span className="highlight">Bhanu Prakash</span>
          </h1>
          <p className="hero-role">Full Stack Web Developer</p>
          <p className="tagline">
            I build responsive websites and dynamic web applications with clean
            code, modern technologies, and a focus on real-world performance.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">5+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat">
              <span className="stat-num">8+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat">
              <span className="stat-num">100%</span>
              <span className="stat-label">Responsive</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>

        <div className="hero-image">
          <div className="profile-ring">
            <div className="profile-photo">
              <img
                src="/images/profile.jpg"
                alt="Bhanu Prakash"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentNode.classList.add('no-photo');
                }}
              />
              <span className="profile-initials">BP</span>
            </div>
          </div>
          <span className="badge badge-react">⚛️ React</span>
          <span className="badge badge-php">🐘 PHP</span>
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <span className="mouse"><span className="wheel"></span></span>
        <span className="scroll-text">Scroll</span>
      </a>
    </section>
  );
}

export default Hero;
