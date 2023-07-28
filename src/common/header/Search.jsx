import React,{useState} from "react"
import logo from "../../Assests/logo.png";
import { Link } from "react-router-dom"
import { FaCartPlus, FaSearch, FaUser } from "react-icons/fa";

const Search = ({ CartItem }) => {
  

  const [show, setShow] = useState(true);
  const handleShow = () => setShow(!show);

  return (
    <>
      <section className='hello'>
        <div className='container c_flex'>
          <div className='logo width '>
           <Link to="/"> <img src={logo} alt='' /></Link>
          </div>

          <div className='search-box f_flex'>
            
            <input type='text' placeholder='Search and hit enter...' />
            <span><FaSearch style={{color:"black"}}/></span>
          </div>

          <div className='icon f_flex width'>
            <div className="dropdown" style={{ float: "right" }}>
              <button className="dropbtn" >
                <FaUser size={20} style={{color:"black"}}/>
                </button>
              <div className="dropdown-content">
                <a href="/login">Login</a>
                <a href="/Regester">Regester</a>
                <a href="/wishlist">Wishlist</a>
                <a href="/contact">Contact Us</a>
              </div>
            </div>



            <div className='icon f-flex cart'>
              <Link to='/cart'>
                <FaCartPlus size={30} style={{color:"black"}}/>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
