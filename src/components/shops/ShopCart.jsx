
import React, { useState } from "react";
import {FaPlus,FaHeart, FaStar, FaStarHalf } from "react-icons/fa";

const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <div className=''>
            <div className='product mtop' style={{widows:"10vw",height:"25vh"}}>
              <div className='img'>
                {/* <span className='discount'>{shopItems.discount}% Off</span> */}
                <img src={shopItems.cover} alt='' className="img-fluid"/>
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <FaHeart onClick={increment}/>
                </div>
              </div>
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
                <div className='rate'>
                 <FaStar/>
                 <FaStar/>
                 <FaStar/>
                 <FaStar/>
                 <FaStarHalf/>
                </div>
                <div className='price plus-down'>
                  <h4>${shopItems.price}.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button onClick={() => addToCart(shopItems)}>
                    <FaPlus/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
