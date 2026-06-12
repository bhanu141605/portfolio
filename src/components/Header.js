import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  // Add a stronger shadow once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock background scroll + close on Escape while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Bhanu Prakash</h1>
          </div>
          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
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
