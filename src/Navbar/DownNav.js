import React, { useState, useEffect } from 'react';
import './Nav.css';

const DownNav = () => {
  const lines = [
    "40% off using this coupon",
    "20% off using this coupon",
    "10% off using this coupon",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 5000); // Change the delay (in milliseconds) between lines here

    return () => clearInterval(interval);
  }, [lines]);

  return (
    <div className='Downnav'>
      <div className='sliding-text-container'>
        {lines.map((line, index) => (
          <div
            key={index}
            className={`sliding-text ${index === currentIndex ? 'visible' : 'hidden'}`}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownNav;
