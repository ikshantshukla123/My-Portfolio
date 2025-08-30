
import './main.css';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

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
    { to: "/", text: "Home" },
    { to: "/about", text: "About Me" },
    { to: "/skills", text: "Skills" },
    { to: "/projects", text: "Projects" },
    { to: "/contact", text: "Contact Me" }
  ];

  return (
    <>
      <div className='navbar'>
        <div className="left">
          <Link to="/" className='title'>My Portfolio</Link>
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
            <Link
              key={link.to}
              to={link.to}
              className={`button ${location.pathname === link.to ? 'active' : ''}`}
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`mobile-button ${location.pathname === link.to ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
