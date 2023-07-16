import React, {Component} from 'react';
import { Logo } from '../images';
import { DownArrowIcon } from '../images/arrows.js';
import '../scss/App.scss';
import '../scss/_home.scss';

export default class Home extends Component {
  render(){
    return (

      <div className="index-container" id="HomeSec">
        <div className="logo-container">
          <img src={Logo} alt="logo" id="index_logo" />
        </div>
        <div id="introText">
          <h1 id="introName"> Hi! I'm <span>Alexandria</span>. </h1>
          <p> I am a web developer with a passion for design, front-end development, and how I can combine the two to create something that is useful and appealing. </p>
          <div id="fading-effect"></div>
        </div>

        <div id="downArrow">
          <a href="#AboutSec"> <DownArrowIcon /> </a>
        </div>
      </div>

    );
  }
}
