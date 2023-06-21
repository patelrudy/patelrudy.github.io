import React from 'react';
import useTypewriter from 'react-typewriter-hook';
import PlexusBackground from './PlexusBackground';
import { Link } from 'react-router-dom';
import './AboutPage.css';
import personal_image from '../assets/personal_image.webp'

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
          <p> Hey there! I am a software engineer who
              applies problem-solving skills to formalize general problem statements
              into precise algorithmic solutions.
              When I'm not working, you'll probably find me working on a DIY project, or hitting the road for a spontaneous trip.
              Feel free to explore more about my work and interests here and on my
              {''} <Link to="https://github.com/patelrudy" className="github-link"> GitHub Page</Link>.
              I'm always open for engaging conversations and potential collaborations.
            </p>
        </div>
      </div>
      
    </div>
  );
};



export default AboutPage;
