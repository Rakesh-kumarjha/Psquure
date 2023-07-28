import React from "react"
import "./style.css"
import TopCart from "./TopCart"

const TopCate = () => {
  return (
    <>
      <section className='TopCate background'>
        <div className='container'>
        <div className='flash_wrapper' >
            <h2 className="fw-400 headings_flash_deals"
              style={{ margin: "20px ", fontFamily: "'Optima Nova', sans-serif" }}>
              New Style Added
            </h2>
            <h6 className='view'><span>View All</span></h6>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  )
}

export default TopCate
