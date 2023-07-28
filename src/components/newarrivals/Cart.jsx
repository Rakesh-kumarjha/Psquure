import React from "react"
import Ndata from "./Ndata"

const Cart = () => {
  return (
    <>
      <div className='content grid product'>
        {Ndata.map((val, index, ) => {
          return (
            <li key={index}
            onClick={()=>{
              window.location.pathname=val.link;
            }}>
            <div className='box' key={index}>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <h4>{val.name}</h4>
              <span>${val.price}</span>
            </div></li>
          )
        })}
      </div>
    </>
  )
}

export default Cart
