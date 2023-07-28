import React from 'react';
import "./Banner.css";

const Banner = ({ title, description, imageUrl }) => {
  return (
    <div>
      <div className="banner-container">
        <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="content">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
