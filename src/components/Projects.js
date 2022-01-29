import React, {Component} from 'react';
import OtherProjects from './OtherProjects';
import projData from '../projData';
import { CreditsTracker, TheHive, RobotsVsAliens } from '../images';
import '../scss/App.scss';
import '../scss/_projects.scss';

export default class Projects extends Component {
  render(){

    return (

      <div className="projects-container" id="ProjSec">
        <span className="sectionTitle">Some things I built</span>

        <div className="grid-container-coursework">
          <div className="grid-item projImg">
            <img src={RobotsVsAliens} alt="Robots Vs Aliens Demo"/>
          </div>
          <div className="grid-item projInfo" id="rVSaInfo">
            <p className="projType">Coursework</p>
            <h6 className="projTitle">Robots vs Aliens</h6>
            <p>Senior Design project at CCNY. A 2D game built on Unity, based on Plants vs Zombies. The objective is defend the homebase for a certain duration and/or collect enough material to rebuild the shield. </p>
            <span className="badge badge-dark badge-pill projSoftware"> Unity </span>
            <span className="badge badge-dark badge-pill projSoftware"> C++ </span>
            <span className="badge badge-dark badge-pill projSoftware"> Pixel Art </span>
            <br/><br/><button id="demoSite"><span><a href="https://alexxg98.github.io/Robots-vs-Aliens/" target="_blank" rel="noopener noreferrer"> DEMO/TUTORIAL </a></span></button>
            <br/><button id="sourceCode"><span><a href="https://github.com/alexxg98/SD_FinalProject" target="_blank" rel="noopener noreferrer"> SOURCE CODE </a></span></button>            
          </div>
          
          <div className="grid-item projImg">
            <img src={CreditsTracker} alt="Credits Tracker Demo"/>
          </div>
          <div className="grid-item projInfo" id="credTrackInfo">
            <p className="projType">Coursework</p>
            <h6 className="projTitle">Credits Tracking App</h6>
            <p>Final project for Software Design course at CCNY. An Android app for CCNY Computer Science students. The app records the courses the student has taken, are in the process of taking, and have not taken yet.</p>
            <span className="badge badge-dark badge-pill projSoftware"> Android Studio </span>
            <span className="badge badge-dark badge-pill projSoftware"> Java </span>
            <br/><br/><button id="sourceCode"><span><a href="https://github.com/alexxg98/Credits_Tracker" target="_blank" rel="noopener noreferrer"> SOURCE CODE </a></span></button>
          </div>

          <div className="grid-item projImg">
            <img src={TheHive} alt="The Hive Demo"/>
          </div>
          <div className="grid-item projInfo" id="theHiveInfo">
            <p className="projType">Coursework</p>
            <h6 className="projTitle">Project Management System</h6>
            <p>Final project for Software Engineering course at CCNY. This system will facilitate active teaming of people with similar interest and skill-set to forge groups for a certain do-good project.</p>
            <span className="badge badge-dark badge-pill projSoftware"> MySQL </span>
            <span className="badge badge-dark badge-pill projSoftware"> Python </span>
            <br/><br/><button id="sourceCode"><span><a href="https://github.com/alexxg98/The-Hive" target="_blank" rel="noopener noreferrer"> SOURCE CODE </a></span></button>
          </div>
        </div>

        <div className="otherProjs-container">
          <div id="otherProjsTitle">
            <p>Other Noteworthy Projects</p>
          </div>
          
          <OtherProjects data={projData} />
          
        </div>

      </div>

    );
  }
}
