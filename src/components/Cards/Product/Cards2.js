import React, { useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import "./Cards2.css";
import img from "../../../Assests/10a 124A3659.jpg";
import img1 from "../../../Assests/11a 124A3664.jpg";

const Cards2 = () => {
  // Sample product data with images and hover images
  const products = [
    { img: img, hoverImg: img1, title: "Product 1", price: "$10" },
    { img: img, hoverImg: img1, title: "Product 2", price: "$20" },
    { img: img, hoverImg: img1, title: "Product 2", price: "$20" },
    // Add more product objects as needed
  ];

  // State to track the hover state of each product
  const [hoveredProductIndex, setHoveredProductIndex] = useState(null);

  // Function to handle product hover
  const handleProductHover = (index) => {
    setHoveredProductIndex(index);
  };

  // Function to handle product mouse leave (reset hover state)
  const handleProductMouseLeave = () => {
    setHoveredProductIndex(null);
  };

  return (
    <div className='shop container'>
      <div class="section-head cards-header flash_wrapper">
        <h4><span>New In:</span>PSQURE BRANDS</h4>
        <h6 className='view'><span>View All</span></h6>
      </div>
      <div className='shop-content'>
        {products.map((product, index) => (
          <div
            className='product-box'
            key={index}
            onMouseEnter={() => handleProductHover(index)}
            onMouseLeave={handleProductMouseLeave}
          >
            <img
              src={hoveredProductIndex === index ? product.hoverImg : product.img}
              alt=""
              className='product-img'
            />
            <h2 className='product-title'>{product.title}</h2>
            <span className='price'>{product.price}</span>
            &nbsp;
            <FaShoppingBag />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards2;
