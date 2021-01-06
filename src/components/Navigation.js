import React, {Component} from 'react';
import logoW from '../images/logoW.png';
import '../scss/App.scss';
import '../scss/_navigation.scss';

export default class Home extends Component {
  render(){
    return (

      <div className="sidenav">
        <a href="#HomeSec" id="logo_home">
          <img src={logoW} alt="logo" />
        </a>

        <a href="#HomeSec">Home</a>
        <a href="#AboutSec">About Me</a>
        <a href="#ExperienceSec">Experience</a>
        <a href="#ProjSec">Projects</a>
        <a href="#ContactSec">Contact</a>

      </div>

    );
  }
}
