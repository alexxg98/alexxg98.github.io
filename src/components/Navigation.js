import React, {Component} from 'react';
import logoW from '../images/logoW.png';
import '../scss/App.scss';
import '../scss/_navigation.scss';

export default class Home extends Component {
  render(){
    return (

      <div class="sidenav">
        <a href="#">
          <img src={logoW} id="nav_logo" alt="logo" />
        </a>
        <a href="index.html">Home</a>
        <a href="#about">About Me</a>
        <span id="copyrightBar"> Designed &amp; built by Alexandria Guo | 2021 </span>
      </div>

    );
  }
}
