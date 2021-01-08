import React from 'react';
import Navbar from './Navigation.js';
import Home from './Home.js';
import AboutMe from './AboutMe.js';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

function Main() {
  return (
    <div className="Main">
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default Main;
