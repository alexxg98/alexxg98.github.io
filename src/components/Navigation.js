import React, {Component} from 'react';
import { LogoW } from '../images';
import '../scss/App.scss';
import '../scss/_navigation.scss';

export default class Home extends Component {
  render(){
    return (

      <div className="sidenav">
        <a href="#HomeSec" id="logo_home">
          <img src={LogoW} alt="logo" />
        </a>

        <div className="linkto">
          <a href="#HomeSec" id="toHome">Home</a>
          <a href="#AboutSec" id="toAbout">About Me</a>
          <a href="#ExperienceSec" id="toExp">Experience</a>
          <a href="#ProjSec" id="toProj">Projects</a>
          <a href="#ContactSec" id="toContact">Contact</a>
        </div>

      </div>

    );
  }
}
