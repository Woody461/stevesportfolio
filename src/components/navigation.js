import React from 'react';
import AboutMe from './About-Me';
import Project from './Project'; // Adjust the path to match the actual location of the Project file.
import Contact from './Contact';

const Navigation = ({ section }) => {
  return (
    <>
      {section.includes('About Me') && <AboutMe />}
      {section.includes('Project') && <Project />}
      {section.includes('Contact') && <Contact />}
    </>
  );
};

export default Navigation;
