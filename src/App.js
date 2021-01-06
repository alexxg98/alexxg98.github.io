import React, { useState, useEffect } from 'react';
import Navbar from './components/Navigation.js';
import Home from './components/Home.js';
import AboutMe from './components/AboutMe.js';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import upArrow from './images/upArrow.png';

function App() {
  const [show, setShow] = useState(false);
  const onScroll = () => {
    setShow(document.documentElement.scrollTop > 500);
  }
  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="App">

      <Navbar/>
      <Home/>
      <AboutMe/>
      <Experience/>
      <Projects/>
      <Contact/>

      {show && (
        <button id="topButton" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <img src={upArrow} alt="Back to top"/>
        </button>
      )}

    </div>
  );
}

export default App;
