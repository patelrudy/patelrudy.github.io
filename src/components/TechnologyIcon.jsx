import React from 'react';
import './TechnologyIcon.css';

const TechnologyIcon = ({ IconComponent, name }) => {
    return (
      <div className='resume-icon'>
        <IconComponent size={50} />
        <span>{name}</span>
      </div>
    );
};  

export default TechnologyIcon;
