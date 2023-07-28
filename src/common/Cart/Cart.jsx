import React from "react"
import "./style.css";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa"
import { Link } from "@mui/material";

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  // Stpe: 7   calucate total of items
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)

  // prodcut qty total
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

            {/* yasma hami le cart item lai display garaaxa */}
            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (

                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <Link to="/productDetails"><img src={item.cover} alt='' /></Link>
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    {/* <div className='removeCart'>
                      <button className='removeCart'>
                       <FaTimes/>
                      </button>
                    </div> */}
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className='cartControl d_flex cart-items-function'>
                      <button className='removeCart'>
                        <FaTimes />
                      </button>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <FaPlus />
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <FaMinus />
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Cart
