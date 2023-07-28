import React from "react"
import Dcard from "./Dcard"
import AOS from 'aos';
// import 'aos/dist/aos.css';
import "./video.css"

const Video = () => {
  AOS.init({
    duration: 1200,
  })
  return (
    <>
      <section className='Discount background NewArrivals' >
        <div className='container my-5'>
         
          <div class="section-head cards-header flash_wrapper">
            <h4><span>New In:</span>PSQURE BRANDS</h4>
            <h6 className='view'><span>View All</span></h6>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  )
}

export default Video;
