import React, {Component} from 'react';
import { featProjs, otherProjs } from '../projData';
import '../scss/App.scss';
import '../scss/_projects.scss';

const FeatProjectItem = ({ data }) => (
  <>
    <div className="grid-item projImg">
      <img src={data.projImg} alt={data.projName + " image"} />
    </div>
    <div className="grid-item projInfo">
      <p className="projType"> {data.projType} </p>
      <h6 className="projTitle"> {data.projName} </h6>
      <p> {data.projDesc} </p>
      {data.projSoftware.map(software => (
        <span className="badge badge-dark badge-pill projSoftware"> {software} </span>
      ))}
      <br /><br />
      {data.url.site !== ''
        && <button id="demoSite"><span><a href={data.url.site} target="_blank" rel="noopener noreferrer"> DEMO/TUTORIAL </a></span></button>
      }
      <br />
      <button id="sourceCode"><span><a href={data.url.github} target="_blank" rel="noopener noreferrer"> SOURCE CODE </a></span></button>
    </div>
  </>
);

const MoreProjectItem = ({ data }) => (
  <div className="card more-project-item">
    <div className="card-body more-project-item-content">
      <p className="projType"> {data.projType} </p>
      <a href={data.url.site !== '' ? data.url.site : data.url.github} className='stretched-link' target="_blank" rel="noopener noreferrer">
        <h6 className="projTitle"> {data.projName} </h6>
      </a>
      <p> {data.projDesc} </p>
    </div>
    <div className="card-footer">
      <button id="sourceCode"><span><a href={data.url.github} target="_blank" rel="noopener noreferrer"> SOURCE CODE </a></span></button>
    </div>
  </div>
);

const FeaturedProjects = () =>
featProjs.length > 0 && (
    <div className="grid-container-coursework">
      {featProjs.map((data) => (
        <FeatProjectItem data={data} />
      ))}
    </div>
  );

const OtherProjects = () =>
  otherProjs.length > 0 && (
    <div className="card-deck more-project-contatiner">
      {otherProjs.map((data) => (
        <MoreProjectItem data={data} />
      ))}
    </div>
  );

  
export default class Projects extends Component {
  render(){

    return (

      <div className="projects-container" id="ProjSec">
        <span className="sectionTitle">Some things I built</span>

        <FeaturedProjects data={featProjs} />

        <div className="otherProjs-container">
          <div id="otherProjsTitle">
            <p>Other Noteworthy Projects</p>
          </div>
          
          <OtherProjects data={otherProjs} />
          
        </div>

      </div>

    );
  }
}
