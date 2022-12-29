import React, { useState, useEffect } from 'react';
import { UpArrowIcon } from '../images/arrows.js';

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
          <UpArrowIcon />
        </button>
      )}
    </div>
  );
}

export default BackToTop;
