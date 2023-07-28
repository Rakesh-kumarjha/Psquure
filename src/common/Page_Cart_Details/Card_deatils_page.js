import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import prod1 from "../../Assests/10a 124A3659.jpg";
import prod2 from "../../Assests/11a 124A3664.jpg";

function MenuItem({ title }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      className="menu-item"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <Card.Img
        variant="top"
        src={isHovered ? prod2 : prod1}
        alt={title}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

function GroupExample() {
  const menuItems = [
    { id: 1, title: 'Card title' },
    { id: 2, title: 'Card title' },
    { id: 3, title: 'Card title' },
    { id: 4, title: 'Card title' },
    { id: 5, title: 'Card title' },
    { id: 6, title: 'Card title' },
    // Add more menu items as needed
  ];

  const chunkedMenuItems = [];
  const chunkSize = 3;

  // Split the menu items into chunks of three
  for (let i = 0; i < menuItems.length; i += chunkSize) {
    chunkedMenuItems.push(menuItems.slice(i, i + chunkSize));
  }

  return (
    <div className='my-4 text-center'>
      {chunkedMenuItems.map((row, rowIndex) => (
        <CardGroup key={rowIndex} className="menu-row">
          {row.map((item) => (
            <MenuItem key={item.id} title={item.title} />
          ))}
        </CardGroup>
      ))}
    </div>
  );
}

export default GroupExample;
