import "./Nav.css";
import React, { useState } from "react";
import { FaBars, FaUser, FaSearch, FaTimes, FaCartPlus } from "react-icons/fa";
import img from "../Assests/11a 124A3664.jpg";
import logo from "../Assests/newlogo.png";
import { Link } from "react-router-dom";
import SearchModal from "./SearchModel";
import DownNav from "./DownNav";


const NewNav = ({ CartItem }) => {


    const [show, setShow] = useState(true);
    const handleShow = () => setShow(!show);


    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    const handleSearchClick = () => {
        setIsSearchModalOpen(true);
    };

    const handleCloseClick = () => {
        setIsSearchModalOpen(false);
    };

    return (
        <>
            <div className="main-nav-display">
                <div className="logo-section logo-big-display">
                    <div>
                        <Link to="/psuure">
                            <img src={logo} title="Psquure" />
                        </Link>
                    </div>
                    {/* <div className="slogun">
                        <p className="text1">Psquuare</p>
                        <p className="text2">FASHION JEWELLERY</p>
                        <p className="text3">ARTISANAL EMBELISHMENTS HANDCRAFTED & EMBROIDERED WITH LOVE</p>
                    </div> */}
                </div>
            </div>

            <nav>

                <div className="wrapper">

                    <label for="menu-btn" className="btn menu-btn">
                        <FaBars />
                    </label>


                    <div className="logo navbar-right ">

                        <div className='search-box '>
                            <div className="example"  >
                                <div className="search-container">
                                    <button onClick={handleSearchClick} title="search">
                                        <FaSearch />
                                    </button>
                                </div>
                                {isSearchModalOpen && <SearchModal closeModal={() => handleCloseClick()} />}

                            </div>


                        </div>
                    </div>

                    <div className="middle-nav-display">
                        <div className="middle-logo-section">
                            <div>
                                <Link to="/psuure">
                                    <img src={logo} title="Psquure" />
                                </Link>
                            </div>
                            {/* <div className="slogun">
                            <p className="text1">Psquuare</p>
                            <p className="text2">FASHION JEWELLERY</p>
                            <p className="text3">ARTISANAL EMBELISHMENTS HANDCRAFTED & EMBROIDERED WITH LOVE</p>
                        </div> */}
                        </div></div>

                    {/*  */}

                    <div>
                        <input type="radio" name="slider" id="menu-btn" />
                        <input type="radio" name="slider" id="close-btn" />
                        <ul className="nav-links">
                            <label for="close-btn" className="btn close-btn"><FaTimes /></label>
                            <li>
                                <a href="#" className="desktop-item">SHOP</a>
                                {/* <input type="checkbox" id="showMega" /> */}
                                <label for="showMega" className="mobile-item">SHOP</label>
                                <div className="mega-box">
                                    <div className="content">
                                        <div className="row d-sm-none d-xl-block">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="row items-center text-center">
                                            <header>Category Types</header>
                                            <ul className="mega-links">
                                                <li><Link to="/graphics">Earrings</Link></li>
                                                <li><Link to="/graphics">NeckPieces</Link></li>
                                                <li><Link to="/graphics">Bracelates</Link></li>
                                                <li><Link to="/graphics">Brooches</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <header>Collection Types</header>
                                            <ul className="mega-links">
                                                <li><Link to="/graphics">Bring Me On</Link></li>
                                                <li><Link to="/graphics">Fruits</Link></li>
                                                <li><Link to="/graphics">Floral</Link></li>
                                                <li><Link to="/graphics">Evil Eyes</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <header>Trending Types</header>
                                            <ul className="mega-links">
                                                <li><Link to="/graphics">Rings</Link></li>
                                                <li><Link to="/graphics">Bags</Link></li>
                                                <li><Link to="/graphics">Pouches</Link></li>
                                                {/* <li><Link to="/graphics"></Link></li> */}
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </li>

                            <li>
                                <a href="#" className="desktop-item">GIFTS</a>
                                {/* <input type="checkbox" id="showMega" /> */}
                                <label for="showMega" className="mobile-item">GIFTS</label>
                                <div className="mega-box">
                                    <div className="content">
                                        <div className="row d-sm-none d-xl-block">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="row items-center text-center">
                                            <header>FEATURED</header>
                                            <ul className="mega-links">
                                                <li><Link to="/graphics">Birds</Link></li>
                                                <li><Link to="/graphics">Feather</Link></li>
                                                <li><Link to="/graphics">Hoops</Link></li>
                                                <li><Link to="/graphics">Fruits</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <header>By Price</header>
                                            <ul className="mega-links">
                                                <li><Link to="/graphics">Bring Me On</Link></li>
                                                <li><Link to="/graphics">Fruits</Link></li>
                                                <li><Link to="/graphics">Floral</Link></li>
                                                <li><Link to="/graphics">Evil Eyes</Link></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </li>

                            <li>
                                <a href="#" className="desktop-item">ACCESSORIES</a>
                                {/* <input type="checkbox" id="showMega" /> */}
                                <label for="showMega" className="mobile-item">ACCESSORIES</label>
                                <div className="mega-box">
                                    <div className="content">
                                        <div className="row d-sm-none d-xl-block">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="row">
                                            <header>HAIR ACCESSORIES</header>
                                            <ul className="mega-links">
                                                <li><Link to="/graphics">ACCESSORIES</Link></li>
                                                <li><Link to="/graphics">ACCESSORIES</Link></li>
                                                <li><Link to="/graphics">ACCESSORIES</Link></li>
                                                <li><Link to="/graphics">ACCESSORIES</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <header>EARRINGS ACCESSORIES</header>
                                            <ul className="mega-links">
                                                <li><Link to="/graphics">Graphics</Link></li>
                                                <li><Link to="/graphics">Graphics</Link></li>
                                                <li><Link to="/graphics">Graphics</Link></li>
                                                <li><Link to="/graphics">Graphics</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <header>BAGS ACCESSORIES</header>
                                            <ul className="mega-links">
                                                <li><Link to="/graphics">Graphics</Link></li>
                                                <li><Link to="/graphics">Graphics</Link></li>
                                                <li><Link to="/graphics">Graphics</Link></li>
                                                <li><Link to="/graphics">Graphics</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <a href="#" className="desktop-item">SHOP BY BRANDS</a>
                                {/* <input type="checkbox" id="showMega" /> */}
                                <label for="showMega" className="mobile-item">SHOP BY BRANDS</label>
                                <div className="mega-box">
                                    <div className="content">
                                        <div className="row d-sm-none d-xl-block">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="row">
                                            <header>EVERYDAY MODERN</header>
                                            <ul className="mega-links">
                                                <li><Link to="/graphics">Earrings</Link></li>
                                                <li><Link to="/graphics">Feather</Link></li>
                                                <li><Link to="/graphics">Rings</Link></li>
                                                <li><Link to="/graphics">Bags</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <header>FESTIVE</header>
                                            <ul className="mega-links">
                                                <li><Link to="/graphics">Fruits</Link></li>
                                                <li><Link to="/graphics">NeckPieces</Link></li>
                                                <li><Link to="/graphics">Bracelates</Link></li>
                                                <li><Link to="/graphics">Brooches</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <header>PREMIUM CONTEMPORARY</header>
                                            <ul className="mega-links">
                                                <li><Link to="/graphics">Hoops</Link></li>
                                                <li><Link to="/graphics">Floral</Link></li>
                                                <li><Link to="/graphics">Evil Eyes</Link></li>
                                                <li><Link to="/graphics">Birds</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>


                    <div className="navbar-right ">



                        <div className="dropdown" >
                            <button className="dropbtn" >
                                <Link to="/login">
                                    <FaUser size={20} style={{ color: "black", }} title="Account" />
                                </Link>
                            </button>

                        </div>
                        <div className='icon f-flex cart'>
                            <Link to='/cart'>
                                <FaCartPlus size={30} style={{ color: "black" }} title="Add to Cart" />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <DownNav />


        </>
    );
};

export default NewNav;

