import React, {Component} from 'react';
import { LogoW, SachhProtoColor, SachhProtoHome, SachhProtoAbout, SachhProtoWork, SachhProtoHomeMobile, SachhProtoFounderMobile, SachhHome, SachhFounder, SachhNews } from '../../images';
import '../../scss/App.scss';
import '../../scss/_navigation.scss';
import '../../scss/_workExp.scss';

const backBtn = () => {
  window.history.back();
}

export default class Sachh extends Component {
  render(){
    return (

      <>
        <div className="sidenav">
          <img src={LogoW} alt="logo" />
          <div className="backto" onClick={backBtn}>
            <p>Back to my main site</p>
          </div>
        </div>

        <div className="workExpMore-container">

          <div className="title">
            <h6 className="position">Web Development Intern at The Sachh India Foundation</h6>
            <p className="date">June 2020 – Sept 2020</p>
          </div>

          <div className="description">
            <p><span><a href="https://newagedrinks.com/">The Sachh Foundation</a></span> is a global organization present in over 10 countries working on sustainable development in line with the United Nations and The Global Goals. The foundation was founded and run globally by one of the leading youth leaders Sankalp Mohan Sharma. Their mission is to connect young leaders around the world and bring them together to join forces and work together on the Sustainable Development Goals by the United Nations.</p>
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
              <p>The Sachh Foundation wanted to completely rebuild their site. As the foundation grows, it was important to create a website that had all the neccesary information about their mission and achievements. Another importance was the ability to reach a large audience.</p>
            </div>

            <div className="grid-item">
              <h3>Research</h3>
            </div>
            <div className="grid-item">
              <p>Before prototyping the site's redesign, I needed to research and get an idea of how other non-profits organized their website to sucessfully convey their mission. The foundation was moving forward from a blog-styled site to formal informative site, so I needed to map out some ideas for the site's design.</p>
              <p>After the initial research phase, I created a document to present to the team how I plan to go about designing the website. To summarize the document, I discussed the site's potential colors, fonts, and layout for each page.</p>
            </div>

            <div className="grid-item prototype">
              <div className="row sachhDoc">
                <div className="col-md-4 p-2">
                  <img className="img-fluid" src={SachhProtoColor} alt="Plan of Colors & Fonts"/>
                </div>
                <div className="col-md-4 p-2">
                  <img className="img-fluid" src={SachhProtoHome} alt="Plan of Homepage Layout"/>
                </div>
                <div className="col-md-4 p-2">
                  <img className="img-fluid" src={SachhProtoAbout} alt="Plan of AboutUs Layout"/>
                </div>
                <div className="col-md-4 p-2">
                  <img className="img-fluid" src={SachhProtoWork} alt="Plan of Our Work Layout"/>
                </div>
                <div className="col-md-4 p-2">
                  <img className="img-fluid" src={SachhProtoHomeMobile} alt="Plan of Homepage Layout for Mobile"/>
                </div>
                <div className="col-md-4 p-2">
                  <img className="img-fluid" src={SachhProtoFounderMobile} alt="Plan of Our Founder Layout for Mobile"/>
                </div>
              </div>
            </div>

            <div className="grid-item researchCont">
              <p>This was a collaborative project. I worked in a team of three other interns, where we regularly communicated with the founder about the progress and any neccesary changes needed to be made. It was collectively decided that the site's layout will be based on the plan I presented to the group - while adjustments were made to the final product, the central theme was as I outlined.</p>
              These were the pages I created:
              <ul>
                <li>Homepage</li>
                <li>Who We Are Subpages - The Youth and Our Founder </li>
                <li>News & Media</li>
                <li>Get Involved</li>
              </ul>
              <p>In addition, I was in charge of ensuring the site was mobile friendly and that each page was cohesive with the rest of the site.</p>
            </div>
          </div>

          <div className="finalImgs">
            <h3>Result</h3>
            <img src={SachhHome} alt="Sachh Homepage"/>
            <img src={SachhFounder} alt="Sachh Our Founder Page"/>
            <img src={SachhNews} alt="Sachh News & Media Page"/>
          </div>

        </div>
      </>

    );
  }
}
