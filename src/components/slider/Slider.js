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
import BannerSlider from './SlideItem';
import img1 from "../../Assests/bnr1.jpeg";
import img2 from "../../Assests/bnr2.jpg";
import img3 from "../../Assests/bnr3.jpeg";
import img4 from "../../Assests/bnr4.jpeg";
import img5 from "../../Assests/bnr5.jpg";
import img6 from "../../Assests/bnr6.jpeg";

const App = () => {
  const slides = [
    {
      image: img1,
      title: 'Slide 1 Title',
      content: 'Slide 1 Content',
    },
    {
      image: img2,
      title: 'Slide 2 Title',
      content: 'Slide 2 Content',
    },
    {
      image: img3,
      title: 'Slide 2 Title',
      content: 'Slide 2 Content',
    },
    {
      image: img4,
      title: 'Slide 2 Title',
      content: 'Slide 2 Content',
    },
    {
      image: img5,
      title: 'Slide 2 Title',
      content: 'Slide 2 Content',
    },
    {
      image: img6,
      title: 'Slide 2 Title',
      content: 'Slide 2 Content',
    },
    // Add more slide objects as needed
  ];

  return (
    <div>
    
      <BannerSlider slides={slides} />
      {/* Other content */}
    </div>
  );
};

export default App;
