import React, {Component} from 'react';
import Timeline from './WorkTimeline';
import workData from '../workData';
import '../scss/App.scss';
import '../scss/_experience.scss';

export default class Experience extends Component {
  render(){
    return (

      <div className="experience-container" id="ExperienceSec">
        <h6 className="sectionTitle">Where I've Worked</h6>
        <Timeline data={workData} />
      </div>

    );
  }
}
