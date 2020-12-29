import React, {Component} from 'react';
import Timeline from './WorkTimeline';
import workData from '../workData';
import '../scss/App.scss';
import '../scss/_experience.scss';

export default class Experience extends Component {
  render(){
    return (

      <div className="experience-container" id="ExperienceSec">
        <span className="sectionTitle">Where I Have Worked</span>
        <Timeline data={workData} />
      </div>

    );
  }
}
