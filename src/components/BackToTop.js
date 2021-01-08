import React, { useState, useEffect } from 'react';
import { UpArrow } from '../images/';

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
          <img src={UpArrow} alt="Back to top"/>
        </button>
      )}
    </div>
  );
}

export default BackToTop;
