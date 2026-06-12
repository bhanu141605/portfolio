import React, { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Bhanu Prakash</h1>
          </div>
          <button className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav ${menuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#home" onClick={handleNavClick}>Home</a></li>
              <li><a href="#about" onClick={handleNavClick}>About</a></li>
              <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
              <li><a href="#experience" onClick={handleNavClick}>Experience</a></li>
              <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
              <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
