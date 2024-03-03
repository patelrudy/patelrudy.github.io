import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/resume">Resume</a>
        </li>
        {/* <li>
          <a href="/contact">Contact</a>
        </li> */}
        <li className="navbar-icons">
          <a href="https://github.com/patelrudy" target="_blank" rel="noopener noreferrer" className="navbar-icon">
            <FaGithub size={20}/>
          </a>
          <a href="https://www.linkedin.com/in/rudreshpatel28" target="_blank" rel="noopener noreferrer" className="navbar-icon">
            <FaLinkedin size={20}/>
          </a>
          <a href="mailto:rpatelweb@gmail.com" className="navbar-icon">
            <FaEnvelope size={20}/>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
