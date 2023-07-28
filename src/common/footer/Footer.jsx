import React from "react";
import logo from "../../Assests/logo.png";
import "./style.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>

        <section className="ft-main">
          <div className="ft-main-item">
            <h2 className="ft-title">About</h2>
            <ul className="ft-list">
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">Careers</a></li>
              <li><Link to="/contact">Contact US</Link></li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Resources</h2>
            <ul>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">eBooks</a></li>
              <li><a href="#">Webinars</a></li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Contact</h2>
            <ul>
              <li><h4>For Order Related Queries:</h4></li>
              <li><a href="#">+91- 7042213669</a></li>
              <li><a href="#">Please get in touch with the above mentioned number <br />on WhatsApp or call</a></li>
              <li><a href="#">Mon - Sat (10 AM - 6 PM)</a></li>
              <li><a href="#">Or write to us on contact@psuure.in</a></li>
            </ul>

          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Stay Updated</h2>
            <p>Subscribe to our newsletter to get our latest news.</p>
            <form className="footer-divition">
              <input type="email" name="email" placeholder="Enter email address" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </section>


        <section className="container pt-4 mb-4 d-flex justify-content-center">

          <a
            className="social-btn m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          ><FaFacebook size={20} /></a>

          <a
            className="social-btn m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >

            <FaInstagram size={20} /></a>


          <a
            className="social-btn m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >

            <FaTwitter size={20} /></a>


          <a
            className="social-btn m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >

            <FaLinkedin size={20} /></a>


          <a
            className="social-btn m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >

            <FaYoutube size={20} /></a>

          <a
            className=" social-btn m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          ><FaPinterest size={20} /></a>
        </section>


        <section className="ft-legal">
          <ul className="ft-legal-list">
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li>&copy; 2019 Copyright Acewebsolution.</li>
          </ul>
        </section>
      </footer>

    </>
  )
}

export default Footer