import React, { useState } from 'react';
import { FaFilter, FaTimes } from 'react-icons/fa';
// import "./Sidenavbar.css";
import $ from "jquery";
import Card_deatils_page from './Card_deatils_page';

const Sidenavbar = () => {

    $(document).ready(function () {
        //jquery for toggle sub menus
        $('.sub-btn').click(function () {
            $(this).next('.sub-menu').slideToggle();
            $(this).find('.dropdown').toggleClass('rotate');
        });

        //jquery for expand and collapse the sidebar
        $('.menu-btn').click(function () {
            $('.side-bar').addClass('active');
            $('.menu-btn').css("visibility", "hidden");
        });

        $('.close-btn').click(function () {
            $('.side-bar').removeClass('active');
            $('.menu-btn').css("visibility", "visible");
        });
    });
    return (
        <>
            <div className='container section-divition'>

                <div className="menu-btn">
                    <button className='fill'>
                        <FaFilter />&nbsp; Filter
                    </button>
                </div>

                <div className="side-bar">
                    <header>
                        <div className="close-btn">
                            <FaTimes />
                        </div>
                    </header>
                    <div className="menu">
                        <div className="item"><a href="#"><i className="fas fa-desktop"></i>Dashboard</a></div>
                        <div className="item">

                            <a className="sub-btn"><i className="fas fa-table"></i>Tables<i className="fas fa-angle-right dropdown"></i></a>
                            <div className="sub-menu">
                                <a href="#" className="sub-item">Sub Item 01</a>
                                <a href="#" className="sub-item">Sub Item 02</a>
                                <a href="#" className="sub-item">Sub Item 03</a>
                            </div>
                        </div>
                        <div className="item"><a href="#"><i className="fas fa-th"></i>Forms</a></div>
                        <div className="item">
                            <a className="sub-btn"><i className="fas fa-cogs"></i>Settings<i className="fas fa-angle-right dropdown"></i></a>
                            <div className="sub-menu">
                                <a href="#" className="sub-item">Sub Item 01</a>
                                <a href="#" className="sub-item">Sub Item 02</a>
                            </div>
                        </div>
                        <div className="item"><a href="#"><i className="fas fa-info-circle"></i>About</a></div>
                    </div>
                </div>

                <div className='no_of_product'> <p> 4898 product</p></div>

                <div className='feature'>
                    <select name="SortBy" id="SortBy" data-default-sortby="manual">
                        <option value="title-ascending" selected="selected">Sort</option>
                        <option value="manual" selected="selected">Featured</option>
                        <option value="best-selling">Best selling</option>
                        <option value="title-ascending">Alphabetically, A-Z</option>
                        <option value="title-descending">Alphabetically, Z-A</option>
                        <option value="price-ascending">Price, low to high</option>
                        <option value="price-descending">Price, high to low</option>
                        <option value="created-ascending">Date, old to new</option>
                        <option value="created-descending">Date, new to old</option>
                    </select>
                </div>

            </div>

        
        </>

    );
};

export default Sidenavbar;
