import React from "react"
import Dcard from "./Dcard"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Discount = () => {
  AOS.init({
    duration: 1200,
  })
  return (
    <>
      <section className='Discount background NewArrivals' data-aos="fade-left">
        <div className='container my-5'>
          <div class="section-head cards-header flash_wrapper">
            <h2><span>SHOP BY&nbsp;</span>CATEGORY</h2>
            <h6 className='view'><span>View All</span></h6>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  )
}

export default Discount
