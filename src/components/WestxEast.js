import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { LogoW, WxE_process, WxE_reviews, WxE_popup, WxE_proto1, WxE_proto2, WxE_proto3, WxE_proto4 } from '../images';
import '../scss/App.scss';
import '../scss/_navigation.scss';
import '../scss/_workExp.scss';

const scrollToTop = () => {
    window.scrollTo(0, 0)
}

export default class WestxEast extends Component {
  render(){
    return (

      <div className="workExpMore-container">
        <div className="sidenav">
          <img src={LogoW} alt="logo" />
          <div className="backto" onClick={scrollToTop}>
            <Link to="/"><p>Back to my main site</p></Link>
          </div>
        </div>

        <div className="title">
          <h6 className="position">UI/UX Intern at WESTxEAST</h6>
          <p className="date">July 2019 - August 2019</p>
        </div>

        <div className="description">
          <p><span><a href="https://westxeast.com/">WESTxEAST</a></span> is a fashion startup that focuses on contemporary South Asian apparel. WESTxEAST was co-founded by Tania Chackumkal and Liya Samuel with their belief that silhouettes from India should be embraced globally. They provide affordable ready-made clothing, and a unique custom design process for all of your wardrobe needs.</p>
        </div>

        <div className="grid-container">
          <div className="grid-item role">
            <h2>My Role</h2>
          </div>
          <div className="grid-item role">
            <h3>I helped redesign the homepage and the gallery page.</h3>
          </div>

          <div className="grid-item">
            <h3>The Goal</h3>
          </div>
          <div className="grid-item goal">
            <span>Homepage: </span>
            <p>We knew that a typical user only spends a few minutes at most on a website, and mostly on the homepage. So I needed to make sure all the vital information about WESTxEAST's services are visible without craming too much in their at the same time.</p>
            <span>Gallery: </span>
            <p>The original gallery page was packed - full of client photos, which is great but it was unorganized. So I redesigned the page for a more organized and cleaner look.</p>
          </div>

          <div className="grid-item">
            <h3>Research (Homepage)</h3>
          </div>
          <div className="grid-item">
            <p>Before prototyping the site's redesign, I wanted to get a feel to how other bridal and fashion companies have organized their pages. While WESTxEAST already had some key elements that will grab a users' attention, the page needed more information. Since users do not spend much time on website, we need to make sure they know what WESTxEAST does and how; but most importantly get them interested in our service.</p>
            <div className="grid-container-researchInner">
              <div className="grid-item">
                What the page already had:
                <ul>
                  <li>Video Header</li>
                  <li>Company Description</li>
                  <li>Links to Products</li>
                  <li>Press Quotes</li>
                </ul>
              </div>
              <div className="grid-item">
                What I can add to the page:
                <ul>
                  <li>Brief Overview of Process</li>
                  <li>Photos of Clients</li>
                  <li>Featured Testimonial</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid-item prototype">
            <h3>Prototype</h3>
            <div className="row">
              <div className="col-md-4 p-2">
                <img className="img-fluid" src={WxE_proto1} alt="Prototype of Process Section"/>
              </div>
              <div className="col-md-4 p-2">
                <img className="img-fluid" src={WxE_proto2} alt="Prototype of Site"/>
              </div>
              <div className="col-md-4 p-2">
                <img className="img-fluid" src={WxE_proto3} alt="Prototype of Review Section"/>
              </div>
            </div>
          </div>

          <div className="grid-item">
            <h3>Research (Homepage)</h3>
          </div>
          <div className="grid-item">
            <p>The gallery, originally, was very open - all the client photos were on display. While this is great to showcase all the photos, it was unorganized and did not look uniform or professional (it was very pinterest-esque). After some research - looking at other site's gallery page - I thought that having a mini-gallery for each client was a good way to organize the photos and give the gallery page a cleaner look.</p>
          </div>

          <div className="grid-item prototype">
            <h3>Prototype</h3>
            <div className="row">
              <div className="col-md-12 p-2">
                <img className="img-fluid" src={WxE_proto4} alt="Prototype of Gallery"/>
              </div>
            </div>
          </div>
        </div>

        <div className="finalImgs">
          <h3>Result</h3>
          <img src={WxE_process} alt="Process Information"/>
          <img src={WxE_reviews} alt="Reviews/Testimonies Section"/>
          <img src={WxE_popup} alt="Gallery Popup"/>
        </div>

      </div>

    );
  }
}
