import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaPlus, FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "../rating/Rating";


const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <FaArrowRight style={{ color: "white", marginBottom: "10px" }} />
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <FaArrowLeft style={{ color: "white", marginBottom: "10px" }} />
      </button>
    </div>
  )
}
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }

  const settings = {

    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
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


  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItem) => {
          return (
            <div className="box" key={productItem.id} >
              <div className="product mtop">
                <div className="img" onClick={() => (window.location.pathname = productItem.link)}>
                  <img src={productItem.cover} alt="" style={{ width: "100%" }} />

                  <div className="product-like">
                    <label>{count}</label> <br />
                    <FaHeart onClick={increment} />
                  </div>
                </div>
                <div className="product-details">
                  <h3>{productItem.name}</h3>
                  <Rating value={parseFloat(productItem.rating)} />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  {/* Ensure rating value is numeric */}
                  <div className="price">
                    {/* <h4>${productItem.price}.00</h4> */}
                    <h4>${productItem.price}</h4>

                    <button onClick={() => addToCart(productItem)}>
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  )
}

export default FlashCard
