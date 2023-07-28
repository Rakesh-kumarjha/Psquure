import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tdata from "./Tdata";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <FaArrowRight style={{ color: "white", marginBottom: "10px" }} />
      </button>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <FaArrowLeft style={{ color: "white", marginBottom: "10px" }} />
      </button>
    </div>
  );
};

const TopCart = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // State to keep track of the hovered image
  const [hoveredImage, setHoveredImage] = useState(null);

  AOS.init({
    duration: 1200,
  });

  return (
    <>
      <Slider {...settings}>
        {Tdata.map((value, index) => {
          return (
            <div
              className='box product'
              key={index}
              data-aos="zoom-out-right"
            >
              <div
                className='img'
                onMouseEnter={() => setHoveredImage(value.hoverImage)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                {/* Display the hoverImage when it's the currently hovered image */}
                <img src={hoveredImage === value.cover ? value.hoverImage : value.cover} alt='' />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default TopCart;
