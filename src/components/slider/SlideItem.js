// import React, { useEffect, useState } from "react";
// import "./Slider.css";
// import imageSlide from "./SlideItem";

// const Slider = () => {
//   const [currentState, setCurrentState] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (currentState === 2) {
//         setCurrentState(0);
//       } else {
//         setCurrentState(currentState + 1);
//       }
//     }, 5000);
//     return () => clearTimeout(timer);
//   }, [currentState]);

//   const bgImageStyle = {
//     backgroundImage: `url(${imageSlide[currentState].url})`,
//     // backgroundPosition: "center",
//     backgroundSize: "contain",
//     backgroundRepeat: "no-repeat",
//     height: "80vh",
//   };

//   const goToNext = (currentState) => {
//     setCurrentState(currentState);
//   };

//   return (
//     <div className="App">
//       <div className="slider-container">

//         <div style={bgImageStyle} ></div>

//         <div className="description">
//           <div>
//             <h1>{imageSlide[currentState].title}</h1>
//             <p>{imageSlide[currentState].desc}</p>
//           </div>
//           <center>
//            <div className="carosel-boult">
//             {imageSlide.map((imageSlide, currentState) => (
//               <span
//                 key={currentState}
//                 onClick={() => goToNext(currentState)}
//               ></span>
//             ))}
//           </div>
//           </center>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BannerSlider.css';

const BannerSlider = ({ slides }) => {

  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    
    centerPadding: '0',
  };

  return (
    <div className="banner-slider">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide-item">
            <img src={slide.image} alt={`Banner ${index + 1}`} />
            {/* <div className="center-content">
              <h2>{slide.title}</h2>
              <p>{slide.content}</p>
            </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
