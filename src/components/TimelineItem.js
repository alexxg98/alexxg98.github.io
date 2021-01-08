import React from 'react';
import { Link } from "react-router-dom";

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
      <p className="moreInfo" onClick={scrollToTop}>
        <Link to={data.more}>More Info</Link>
      </p>
      <span className = "circle" />
    </div>
  </div>
);

export default TimelineItem;
