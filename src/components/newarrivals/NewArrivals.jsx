import React from "react"
import Cart from "./Cart"
import "./style.css"

const NewArrivals = () => {
  return (
    <>
      <section className='NewArrivals background'>
        <div className='container my5'>

          <div class="section-head cards-header flash_wrapper">
            <h2><span>New</span> Arrivals</h2>
            <h6 className='view'><span>View All</span></h6>
            {/* <hr style={{margin:"0px 20px 0px 20px"}}/> */}

          </div>



          {/* <div className='heading d_flex'>
            <div className='heading-left row f_flex'>
              <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
              <h2>New Arrivals </h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div> */}

          <Cart />
        </div>
      </section>
    </>
  )
}

export default NewArrivals
