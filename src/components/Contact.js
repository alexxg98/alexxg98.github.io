import React, {Component} from 'react';
import '../scss/App.scss';
import '../scss/_contact.scss';

export default class Contact extends Component {
  render(){
    return (

      <div className="contact-container" id="ContactSec">
        <span className="sectionTitle">Let's get in touch!</span>
        <p>Whether you want to ask a question, request to see more of my work, or even just to say hi, feel free to contact me! I'll try my best to reply back to you.</p>

        <div className="grid-container-contact">
          <div className="grid-item email">
            <a href="mailto:alexandria.y.guo@gmail.com">
              <h6>Email me at</h6>
              <p>alexandria.y.guo@gmail.com</p>
            </a>
          </div>

          <div className="grid-item linkedin">
            <a href="https://www.linkedin.com/in/alexandria-guo">
              <h6>Connect with me on</h6>
              <p>LinkedIn</p>
            </a>
          </div>

          <div className="grid-item github">
            <a href="https://github.com/alexxg98">
              <h6>Explore my</h6>
              <p>GitHub</p>
            </a>
          </div>

          <div className="grid-item design">
          <a href="https://alexxg98.github.io/Design_Portfolio/">
            <h6>Check out my</h6>
            <p>Design Portfolio</p>
          </a>
          </div>

        </div>

        <span id="copyrightBar"><hr/>Designed &amp; built by Alexandria Guo | 2021</span>

      </div>

    );
  }
}
