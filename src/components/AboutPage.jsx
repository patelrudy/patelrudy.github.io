import React, { useEffect, useState } from 'react';
import PlexusBackground from './PlexusBackground';
import { Link } from 'react-router-dom';
import './AboutPage.css';
import personal_image from '../assets/personal_image.webp'

const words = [
  'Analytical', 'Creative', 'Adaptable'
];

const typingDelay = 100; // delay between typing each letter
const erasingDelay = 50; // delay between erasing each letter
const pauseDelay = 2000; // pause before deleting word and moving to the next one

const TypewriterEffect = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);
  const [typing, setTyping] = useState(false);

  // blinking cursor
  useEffect(() => {
    let cursor;
    if (!typing) {
      cursor = setInterval(() => {
        setBlink((prevBlink) => !prevBlink);
      }, 500);
    }
    return () => clearInterval(cursor);
  }, [typing]);

  // typewriter
  useEffect(() => {
    if(subIndex === words[wordIndex].length + 1 && !reverse) {
      setTyping(false);
      setTimeout(() => {
        setReverse(true);
        setTyping(true);
      }, pauseDelay);
    } else if (!reverse && subIndex <= words[wordIndex].length) {
      setTyping(true);
      setTimeout(() => {
        setSubIndex((prevSubIndex) => prevSubIndex + 1);
      }, typingDelay);
    } else if (reverse && subIndex > 0) {
      setTyping(true);
      setTimeout(() => {
        setSubIndex((prevSubIndex) => prevSubIndex - 1);
      }, erasingDelay);
    } else if (subIndex === 0 && reverse) {
      setTyping(false);
      setReverse(false);
      setWordIndex((prevWordIndex) => (prevWordIndex + 1) % words.length);
    }
  }, [subIndex, wordIndex, reverse]);

  return (
    <h2>
      {`${words[wordIndex].substring(0, subIndex)}${typing || blink ? "|" : "\u00a0"}`}
    </h2>
  );
};


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
