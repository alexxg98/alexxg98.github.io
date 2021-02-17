import React, {Component} from 'react';
import { LogoW, NadCta, NadHome, NadPopup, NadProto1, NadProto2 } from '../../images';
import '../../scss/App.scss';
import '../../scss/_navigation.scss';
import '../../scss/_workExp.scss';

const backBtn = () => {
  window.history.back();
}

export default class NewAgeDrinks extends Component {
  render(){
    return (

      <div className="workExpMore-container">
        <div className="sidenav">
          <img src={LogoW} alt="logo" />
          <div className="backto" onClick={backBtn}>
            <p>Back to my main site</p>
          </div>
        </div>

        <div className="title">
          <h6 className="position">Web Development Intern at New Age Drinks</h6>
          <p className="date">April 2019 - July 2019</p>
        </div>

        <div className="description">
          <p><span><a href="https://newagedrinks.com/">New Age Drinks</a></span> is a beverage startup whose mission is to create the first Smart Soda, BrainPOP that integrates health and productivity in a fun and tasteful way. New Age Drinks was founded by Sierra Hooshiari who is passionate about promoting healthy drinking after recovering from being hit by a drunk driver. BrainPOP is a healthier soda choice and a great alternative for the nightlife.</p>
        </div>

        <div className="grid-container">
          <div className="grid-item role">
            <h2>My Role</h2>
          </div>
          <div className="grid-item role">
            <h3>I researched, wireframed, and implemented the site.</h3>
          </div>

          <div className="grid-item">
            <h3>The Goal</h3>
          </div>
          <div className="grid-item">
            <p>New Age Drinks was a fairly new startup - the goal was to build up the campaign and secure funds and interest in the company. As such, it was neccesary to make the site, especially the homepage to grab the user's attention (and email address).</p>
          </div>

          <div className="grid-item">
            <h3>Research (Homepage)</h3>
          </div>
          <div className="grid-item">
            <p>Before prototyping the site's redesign, I needed to research the best way to get user emails - Squeeze vs Splash vs Landing Page. I also looked at other beverage companies to see how their site is laid out, how much information is including in the homepage, and how they created interest to get users to sign up for emails. </p>
          </div>

          <div className="grid-item prototype">
            <h3>Prototype</h3>
            <div className="row sketch">
              <div className="col-md-6 p-2">
                <img className="img-fluid" src={NadProto1} alt="Sketch of Site"/>
              </div>
              <div className="col-md-6 p-2">
                <img className="img-fluid" src={NadProto2} alt="Sketch of Site"/>
              </div>
            </div>
          </div>

          <div className="grid-item">
            <h3>Research & Testing</h3>
          </div>
          <div className="grid-item">
            <p>After discussing the options, we deciding on implementing a splash page because it quickly prompts users to input their email addresses. This created a good visual and content for viewing while encouraging sign-ups.</p>
            <p>Aside from the homepage, the product page was essential. According to the company's mission, it was important to make sure that this page conveys the healthy and the transparancy of the  ingredients in each of the product.</p>
            <p>After designing and implementing the splash page, we internally tested the page. While it was a great way to ask for email addresses, it was not helpful in keeping user interest on the site - it felt more like a barrier. So after the testing, we went back to the other options and decided to forgo the splash page and only have one landing page. This became a much cleaner experience - all the information about the company, its products, and the campaign were all on one page which would help keep the user engagement.</p>
            <p>Since the main focus was to get emails and interest in the product/campaign up, I kept looking at how other websites achieved this, keeping in mind how not to annoy users as well. From this research, I decided to add a few more email opt-in spaces to keep encouraging input.</p>
            <ol>
              <li>Delayed pop-up. The user had some time viewing the page and may have gained some interest in the new company, so it becomes a little reminder to enter their email address.</li>
              <li>Sticky bar. After some discussions, we felt that it would be benifitial to have a opt-in space that is static throughout a user's time on the site so they can easily input their email when they want to do so.</li>
              <li>Scroll pop-up. From personal experience, email opt-ins that appear after scrolling down the page is the least intrusive in viewing experience but also the most likely place for input. Users have viewed/scrolled through the page and have gathered some interest in the product.</li>
            </ol>
          </div>
        </div>

        <div className="finalImgs">
          <h3>Result</h3>
          <img src={NadCta} alt="Call to Action Popup"/>
          <img src={NadHome} alt="Landing Page"/>
          <img src={NadPopup} alt="Delayed/Scroll Popup"/>
        </div>

      </div>

    );
  }
}
