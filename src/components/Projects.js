import React, {Component} from 'react';
import { CreditsTracker, TheHive, DeadZones, HotelAvail, JqProj } from '../images';
import '../scss/App.scss';
import '../scss/_projects.scss';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      img_path: [DeadZones, HotelAvail, JqProj],
      img_alt: ["Dead Zone Demo", "Hotel Availability Demo", "Learning JQuery Demo"],
      title: ["Informative Website", "Learning JavaScript", "Learning jQuery"],
      description: [
        "This is an informative website I made about dead zones. The site includes one (1) index and three (3) subpages which are all linked. The goal of this project is to utilize all the CSS techniques we had learned, such as transitions and hover.",

        "This website consists of 10 (ten) users that randomly selects 1 (one) out of the four (four) available hotels. Using the selctions, the program will update the information about each hotels' rooms booked and still available.",

        "This is a simple portfolio site that demonstrate the jQuery I learned during the program. Comprising of five mini-projects, each one shows the use of different methods after being clicked on."
      ],
      url_link: ["https://alexxg98.github.io/Dead_Zones/", "https://alexxg98.github.io/Hotel_Reservation/", "https://alexxg98.github.io/Learning-jQuery/"],
      git_link: ["https://github.com/alexxg98/Dead_Zones", "https://github.com/alexxg98/Hotel_Reservation", "https://github.com/alexxg98/Learning-jQuery"]
    };
  }
  render(){

    return (

      <div className="projects-container" id="ProjSec">
        <span className="sectionTitle">Some things I built</span>

        <div className="grid-container-coursework">
          <div className="grid-item projImg">
            <img src={CreditsTracker} alt="Credits Tracker Demo"/>
          </div>
          <div className="grid-item" id="credTrackInfo">
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
          <div className="grid-item" id="theHiveInfo">
            <p className="projType">Coursework</p>
            <h6 className="projTitle">Project Management System</h6>
            <p>Final project for Software Engineering course at CCNY. This system will facilitate active teaming of people with similar interest and skill-set to forge groups for a certain do-good project.</p>
            <span className="badge badge-dark badge-pill projSoftware"> MySQL </span>
            <span className="badge badge-dark badge-pill projSoftware"> Python </span>
            <br/><br/><button id="sourceCode"><span><a href="https://github.com/alexxg98/The-Hive" target="_blank" rel="noopener noreferrer"> SOURCE CODE </a></span></button>
          </div>
        </div>

        <div className="grid-container-techworks">
          <div className="grid-item" id="techworksTitle">
            <p>Featured projects from CUNY TechWorks</p>
          </div>

          <div className="grid-item" id="selectProj">
            <button onClick={() => this.setState({index: 0})}>Dead Zones</button>
            <button onClick={() => this.setState({index: 1})}>Hotel Availability</button>
            <button onClick={() => this.setState({index: 2})}>Learning JQuery</button>
          </div>

          <div className="grid-item projInfo">
            <h6 className="projTitle">{this.state.title[this.state.index]}</h6>
            <p>{this.state.description[this.state.index]}</p>
            <button id="sourceCode">
              <span><a href={this.state.git_link[this.state.index]} target="_blank" rel="noopener noreferrer">SOURCE CODE</a></span>
            </button>
            <a href={this.state.url_link[this.state.index]}>
              <img src={this.state.img_path[this.state.index]} alt={this.state.img_alt[this.state.index]} />
            </a>
          </div>
        </div>

      </div>

    );
  }
}
