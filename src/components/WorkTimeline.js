import React from 'react';
import workData from '../workData';
import TimelineItem from './TimelineItem';
import '../scss/App.scss';
import '../scss/_timeline.scss';

const WorkTimeline = () =>
  workData.length > 0 && (
    <div className = "timeline-contatiner">
      {workData.map((data, idx) => (
        <TimelineItem data = {data} key = {idx} />
      ))}
    </div>
  );

export default WorkTimeline;
