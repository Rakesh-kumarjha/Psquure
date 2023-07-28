import React from "react";
import Home from "../components/MainPage/Home";
import FlashDeals from "../components/flashDeals/FlashDeals";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/shops/Shop";
import Annocument from "../components/annocument/Annocument";
import ServiceCardList from "../components/Cards/Service/ServiceCardList";
import Video from "../components/video/Video";
import Whatsapp from "../common/Whatsapp";
import products from "../components/Cards/Product/ProductData";
import Cards2 from "../components/Cards/Product/Cards2";


const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Whatsapp/>
      <Home CartItem={CartItem} />
      <Video />

      <FlashDeals productItems={productItems} addToCart={addToCart} />
       <Cards2 products={products} />
      {/*<Videocard />*/}

      <Discount />
      <TopCate />
      {/* <NewArrivals /> */}
      <Cards2 products={products}/>
      {/* <Shop shopItems={shopItems} addToCart={addToCart} /> */}
      <Annocument />
      {/* <Wrapper /> */}
      <ServiceCardList />
    </>
  )
}

export default Pages
