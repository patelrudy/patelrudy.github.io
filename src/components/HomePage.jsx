import React from 'react';
import PlexusBackground from './PlexusBackground';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home">
      <div className="plexus-background">
        <PlexusBackground />
      </div>
      <div className="home-content">
        <h1>Rudresh Patel</h1>
        <h2>Georgia Institute of Technology</h2>
        <h3>Computer Science</h3>
        <h4>with Intelligence and Devices threads</h4>
      </div>
      <div className="home-icons">
        <a href="https://github.com/patelrudy">
          <FaGithub />
          <span> Github</span>
        </a>
        <a href="https://www.linkedin.com/in/rudreshpatel28">
          <FaLinkedin />
          <span> LinkedIn</span>
        </a>
        <a href="mailto:rpatelweb@gmail.com">
          <FaEnvelope />
          <span> Email</span>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
