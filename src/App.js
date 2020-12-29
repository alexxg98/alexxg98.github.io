import React from 'react';
import Navbar from './components/Home.js';
import Home from './components/Navigation.js';
import Timeline from './components/WorkTimeline';
import workData from './workData';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Home/>
      <Timeline data={workData} />

    </div>
  );
}

export default App;
