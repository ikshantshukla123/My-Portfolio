
import './main.css';
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { to: "mainy", text: "Home" },
    { to: "aboutMey", text: "About Me" },
    { to: "skills", text: "Skills" },
    { to: "project", text: "Projects" },
    { to: "contact", text: "Contact Me" }
  ];

  return (
    <>
      <div className='navbar'>
        <div className="left">
          <h2 className='title'>My Portfolio</h2>
        </div>
        
        {/* Hamburger Menu Button */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Desktop Navigation */}
        <div className={`right ${isMobile ? 'mobile-hidden' : ''}`}>
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-140}
              duration={600}
              className='button'
            >
              {link.text}
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-140}
              duration={600}
              className='mobile-button'
              onClick={closeMenu}
            >
              {link.text}
            </ScrollLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
