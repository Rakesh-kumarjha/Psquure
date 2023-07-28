
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pages from "./pages/Pages";
import Cart from "./common/Cart/Cart";
import Singleproduct from "./common/Product_Details/Singleproduct";
import Details from "./components/Details";
import Page_Cart_details from "./common/Product_Details/Page_Cart_details";
import "./App.css";
import Header from "./common/header/Header";
import Data from "./components/Data";
import Footer from "./common/footer/Footer";
import Sdata from "./components/shops/Sdata";
import Contact from "./components/MainPage/Contact";
import Login from "./components/MainPage/Login"
import Regester from "./components/MainPage/Regester";
import ForgotPassword from "./components/MainPage/ForgotPassword";
import Search from "./Navbar/SearchBar";


const App = () => {
  const { productItems } = Data;
  const { shopItems } = Sdata;
  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(CartItem.map((item) =>
        item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item
      ));
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(CartItem.map((item) =>
        item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item
      ));
    }
  };


  return (
    <>

      <Router>
        <Header CartItem={CartItem} />
        <Routes>
          <Route path="/productDetails" element={<Singleproduct />} />
          {/* <Route path="/Details" element={<Details />} /> */}
          <Route path="/graphics" element={<Page_Cart_details />} />
          <Route path="/psuure" element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
          <Route path="/" element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
          <Route path="/cart" element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regester" element={< Regester />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/search" element={<Search />} />


        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App;
