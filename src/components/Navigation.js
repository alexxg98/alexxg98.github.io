import React, {Component} from 'react';
import logoW from '../images/logoW.png';
import '../scss/App.scss';
import '../scss/_navigation.scss';

export default class Home extends Component {
  render(){
    return (

      <div className="sidenav">
        <a href="#HomeSec">
          <img src={logoW} id="nav_logo" alt="logo" />
        </a>
        <a href="#HomeSec">Home</a>
        <a href="#AboutSec">About Me</a>
        <a href="#ExperienceSec">Experience</a>
        <span id="copyrightBar"> Designed &amp; built by Alexandria Guo | 2021 </span>
      </div>

    );
  }
}
