import React from 'react';
import { Link } from "react-router-dom";
import otherProjs from '../projData';
import '../scss/App.scss';
import '../scss/_projects.scss';

const MoreProjectItem = ({ data }) => (
  <div className="card more-project-item">
    <div className="card-body more-project-item-content">
      <p className="projType"> {data.projType} </p>
      <a href={data.url.site !== '' ? data.url.site : data.url.github} className='stretched-link' target="_blank" rel="noopener noreferrer">
        <h6 className="projTitle"> {data.projName} </h6>
      </a>
      <p> {data.projDesc} </p>
    </div>
    <div class="card-footer">
      <button id="sourceCode"><span><a href={data.url.github} target="_blank" rel="noopener noreferrer"> SOURCE CODE </a></span></button>
    </div>
  </div>
);

const otherProjects = () =>
  otherProjs.length > 0 && (
    <div className="card-deck more-project-contatiner">
      {otherProjs.map((data) => (
        <MoreProjectItem data={data} />
      ))}
    </div>
  );

export default otherProjects;