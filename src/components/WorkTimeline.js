import React from 'react';
import { Link } from "react-router-dom";
import workData from '../workData';
import '../scss/App.scss';
import '../scss/_timeline.scss';

const scrollToTop = () => {
    window.scrollTo(0, 0)
}

const TimelineItem = ({ data }) => (
  <div className = "timeline-item">
    <div className = "timeline-item-content">
      <time> {data.startDate} </time>
      <h6> <a href={data.company.url}>
        {data.company.text}</a> | <span>{data.companyDescription}</span>
      </h6>
      <p> {data.overview} </p>
      <p className="moreInfo">
        <Link to={data.more} onClick={scrollToTop}>More Info</Link>
      </p>
      <span className = "circle" />
    </div>
  </div>
);

const WorkTimeline = () =>
  workData.length > 0 && (
    <div className = "timeline-contatiner">
      {workData.map((data, idx) => (
        <TimelineItem data = {data} key = {idx} />
      ))}
    </div>
  );

export default WorkTimeline;
