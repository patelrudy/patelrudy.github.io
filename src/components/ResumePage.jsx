import React from 'react';
import PlexusBackground from './PlexusBackground';
import TechnologyIcon from './TechnologyIcon';
import { DiJava, DiPython, DiJavascript1, DiMongodb, DiReact, DiCss3, DiHtml5, DiDocker, DiGit } from 'react-icons/di';
import { SiApachehadoop, SiTailwindcss, SiAssemblyscript, SiCucumber, SiC, SiSpring, SiJenkins, SiJira, SiFlask, SiDjango, SiGrafana, SiApachekafka, SiLatex, SiKubernetes } from 'react-icons/si';
import { FaDatabase, FaAws } from 'react-icons/fa';

import './ResumePage.css';

const ResumePage = () => {
  const technologies = [
    { name: 'JAVA', IconComponent: DiJava },
    { name: 'Python', IconComponent: DiPython },
    { name: 'C', IconComponent: SiC },
    { name: 'JavaScript', IconComponent: DiJavascript1 },
    { name: 'SQL', IconComponent: FaDatabase },
    { name: 'HTML', IconComponent: DiHtml5 },
    { name: 'Docker', IconComponent: DiDocker },
    { name: 'Git', IconComponent: DiGit },
    { name: 'Jenkins', IconComponent: SiJenkins },
    { name: 'JIRA', IconComponent: SiJira },
    { name: 'Spring-boot', IconComponent: SiSpring },
    { name: 'Django', IconComponent: SiDjango },
    { name: 'Flask', IconComponent: SiFlask },
    { name: 'MongoDB', IconComponent: DiMongodb },
    { name: 'React', IconComponent: DiReact },
    { name: 'CSS', IconComponent: DiCss3 },
    { name: 'Assembly', IconComponent: SiAssemblyscript },
    { name: 'Kafka', IconComponent: SiApachekafka },
    { name: 'Kubernetes', IconComponent: SiKubernetes },
    { name: 'AWS', IconComponent: FaAws },
    { name: 'Grafana', IconComponent: SiGrafana },
    { name: 'LaTeX', IconComponent: SiLatex },
    { name: 'TailWind CSS', IconComponent: SiTailwindcss },
    { name: 'Hadoop', IconComponent: SiApachehadoop },
    { name: 'Cucumber', IconComponent: SiCucumber },
  ];

  return (
    <div className="resume">
        <div className="plexus-background">
            <PlexusBackground />
        </div>
        <div className='resume-container'>
            <div className="resume-content">
                <h1>Resume</h1>
            </div>
            <div className="resume-icons">
                {technologies.map((tech, index) => (
                    <TechnologyIcon key={index} IconComponent={tech.IconComponent} name={tech.name} />
            ))}
            </div>
            <div className="resume-pdf">
                <iframe title='google drive link' src="https://drive.google.com/file/d/17Upxp3jmovIcWsJnTT4hyQ9W2L4k8QrU/preview" width="80%" height="700" allow="autoplay"></iframe>
            </div>
        </div>
    </div>
  );
};

export default ResumePage;
