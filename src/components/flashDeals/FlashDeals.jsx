import React from "react"
import FlashCard from "./FlashCard"
import "./style.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const FlashDeals = ({ productItems, addToCart }) => {
  AOS.init({
    duration: 1200,
  })
  return (
    <>
      <section className='flash' data-aos="zoom-out-right" >
         <div className='container'>
          <div className='flash_wrapper' >
            <h2 className="fw-400 headings_flash_deals"
              style={{ margin: "20px ", fontFamily: "'Optima Nova', sans-serif" }}>
              New Style Added
            </h2>
            <h6 className='view'><span>View All</span></h6>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals
