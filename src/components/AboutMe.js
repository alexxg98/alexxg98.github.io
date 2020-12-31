import React, {Component} from 'react';
import cartoonMe from '../images/cartoon.png';
import '../scss/App.scss';
import '../scss/_aboutMe.scss';

export default class AboutMe extends Component {
  render(){
    return (

      <div className="aboutMe-container" id="AboutSec">
        <span className="sectionTitle">About Me</span>

        <div className="grid-container-about">
          <div className="grid-item cartoon-container">
            <img src={cartoonMe} alt="Me as a cartoon" id="cartoon-img" />
          </div>

          <div className="grid-item backgroundText">
            <p>Hello! I'm Alexandria, a software engineer based in New York City.</p>
            <p> My passion lies in front-end development, particular in how I can combine design and code together to create something that is useful and appealing. My goal is to build applications that are beautiful and user friendly.</p>
          </div>

          <div className="grid-item skills">
            <p>Here are a few things I've been working with recently:</p>
            <ul>
              <li>HTML & (S)CSS</li>
              <li>Bootstrap</li>
              <li>Python</li>
              <li>Java</li>
              <li>ReactJS</li>
              <li>InVision</li>
            </ul>
          </div>

          <div className="grid-item education">
            <div className="subSections">Education</div>
            <section className="ccny">
              <p>The City College of New York
                <span>(Aug 2016 - Present)</span>
              </p>
              <p>Computer Science, B.S. | Minor in Art Studio</p>
            </section>
            <section className="qcc">
              <p>Queensborough Community College
                <span>(May 2018 - Jan 2019)</span>
              </p>
              <p>CUNYTechWorks, Software Development Training Program</p>
            </section>
          </div>

        </div>
      </div>

    );
  }
}
