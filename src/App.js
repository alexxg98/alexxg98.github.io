import React from 'react';
import Navbar from './components/Navigation.js';
import Home from './components/Home.js';
import AboutMe from './components/AboutMe.js';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Home/>
      <AboutMe/>
      <Experience/>
      <Projects/>
      <Contact/>

    </div>
  );
}

export default App;
