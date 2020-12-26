import React, {Component} from 'react';
import logo from '../images/logo.png';
import downArrow from '../images/downArrow.png';
import '../scss/App.scss';
import '../scss/_home.scss';

export default class Home extends Component {
  render(){
    return (

      <div className="index-container">
        <div className="logo-container">
          <img src={logo} alt="logo" id="index_logo" />
        </div>
        <div id="introText">
          <h1 id="introName"> Hi! I'm <span>Alexandria</span>. </h1>
          <p> I am a web developer with a passion for design, front-end development, and how I can combine the two to create something that is useful and appealing. </p>
          <div id="fading-effect"></div>
        </div>

        <div id="downArrow">
          <a href="#about"> <img src={downArrow} alt="Down to About Section"/> </a>
        </div>
      </div>

    );
  }
}
