import React, { useState } from 'react';
import { render } from 'react-dom';
import ReactWhatsapp from 'react-whatsapp';
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="whatsapp">
      <a
        aria-label="Chat on WhatsApp"
        href="https://wa.me/918016418339?text=I'm%20interested%20in%20your%20car%20for%20sale"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          alt="Chat on WhatsApp"
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png'
          width={50}
        />
        {isHovered && (
          <div className="tooltip">
            <p>Chat With Us</p>
          </div>
        )}
      </a>
    </div>
  );
};

export default Whatsapp;
