import React from 'react';

const TimelineItem = ({ data }) => (
  <div className = "timeline-item">
    <div className = "timeline-item-content">
      <time> {data.startDate} </time>
      <h6> <a href={data.company.url}> {data.company.text} </a> | {data.companyDescription} </h6>
      <p> {data.overview} </p>
      <span className = "circle" />
    </div>
  </div>
);

export default TimelineItem;
