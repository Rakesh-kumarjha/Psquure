import React from "react";
import "./Header.css";
import Head from "./Head";
import Search from "./Search";
import NewNav from "../../Navbar/Nav";

const Header = ({ CartItem }) => {

  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      {/* <Head /> */}
      <div className="search">
        {/* <Search CartItem={CartItem} className="hii"/> */}
        <NewNav />
      </div>
    </>
  )
}

export default Header
