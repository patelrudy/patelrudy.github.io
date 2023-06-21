import React from 'react';
import useTypewriter from 'react-typewriter-hook';
import PlexusBackground from './PlexusBackground';
import { Link } from 'react-router-dom';
import './AboutPage.css';
import personal_image from '../assets/personal_image.JPG'

const MagicOcean = [
  'Analytical', 'Creative', 'Adaptable', 'User-Focused'
];

let index = 0;

const TypewriterEffect = () => {
  const [magicName, setMagicName] = React.useState(MagicOcean[index]);
  const intervalRef = React.useRef({});
  const name = useTypewriter(magicName);

  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      index = (index + 1) % MagicOcean.length;
      setMagicName(MagicOcean[index]);
    }, 5000);

    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [magicName]);

  return <h2>{name}</h2>;
}

const AboutPage = () => {
  return (
    <div className="about">
      <div className="plexus-background">
        <PlexusBackground />
      </div>
      <div className='about-container'>
        <div className="about-content">
          <h1>About Me</h1>
        </div>
        <div className="about-content-effect">
          <TypewriterEffect />
        </div>
      </div>
      <div className="personal-section">
        <div className="personal-image">
          <img src={personal_image} alt="Rudresh Patel"/>
        </div>
        <div className="personal-info">
          <p>Hey there! I'm a recent Georgia Tech grad with a major in Computer Science,
             where I got to explore the cool worlds of Artificial Intelligence and Devices. 
             Now, as a software engineer, I apply my problem-solving skills to turn big,
             messy problems into neat algorithmic solutions. When I'm not coding,
             you'll probably find me working on a DIY project, hitting the road for a spontaneous trip,
             or delving into some new tech gadget. Want to see what I've been up to lately?
             Check out {''} <Link to="https://github.com/patelrudy" className="github-link"> my GitHub Page</Link> for some of my projects.</p>
        </div>
      </div>
      
    </div>
  );
};



export default AboutPage;
