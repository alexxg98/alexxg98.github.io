import React, { useState, useEffect } from 'react';
import upArrow from '../images/upArrow.png';

function BackToTop() {
  const [show, setShow] = useState(false);
  const onScroll = () => {
    setShow(document.documentElement.scrollTop > 500);
  }
  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      {show && (
        <button id="topButton" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <img src={upArrow} alt="Back to top"/>
        </button>
      )}
    </div>
  );
}

export default BackToTop;
