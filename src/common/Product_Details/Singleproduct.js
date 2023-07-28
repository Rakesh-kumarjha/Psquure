import React from 'react';
import './Singleproduct.css';
import Colors from './Colors';
import DetailsThumb from './DetailsThumb';
import img1 from "../../Assests/10a 124A3659.jpg";
import img2 from '../../Assests/10b 124A3747.jpg';
import img3 from '../../Assests/11a 124A3664.jpg';
import img4 from '../../Assests/12a 124A3667.jpg';
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

class Singleproduct extends React.Component {
  state = {
    products: [
      {
        "_id": "1",
        "title": "Necklace",
        "src": [img1, img2, img3, img4],
        "description": "jjjm",
        "stars": "5",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 45,
        "colors": ["red", "black", "crimson", "teal"],
        "count": 1,
      },
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { products, index } = this.state;
    return (
      <>
        <div className="container">
          {products.map((item) => (
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt="" />
              </div>
              <div className="box">
                <div className="row">
                  <h2 style={{ fontWeight: "600" }}>{item.title}</h2>
                  <a href="/cart">
                    <span className="heart">
                      <AiOutlineHeart />
                    </span>
                  </a>
                </div>
                <p>${item.price}</p>
                <p>{item.description}</p>
                <p>{item.content}</p>
                <DetailsThumb
                  images={item.src}
                  tab={this.handleTab}
                  myRef={this.myRef}
                />
                <button className="cart">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
        <section className="bg-light border-top py-4">
          <div className="container">
            <div className="d-flex flex-wrap xl:flex-nowrap">
              <div className="col-xl-8 mb-4">
                <div className="border rounded-2 px-3 py-2 bg-white">
                  <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a data-toggle="pill" href="#home">Home</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a data-toggle="pill" href="#menu1" className="nav-link">Menu 1</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a data-toggle="pill" href="#menu2" className="nav-link">Menu 2</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a data-toggle="pill" href="#menu3" className="nav-link">Menu 3</a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="home" role="tabpanel">
                      <p>
                        With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                      </p>
                    </div>
                    <div className="tab-pane fade" id="menu1" role="tabpanel">
                      <p>
                        Tab content or sample information now <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      </p>
                    </div>
                    <div className="tab-pane fade" id="menu2" role="tabpanel">
                      <p>
                        Another tab content or sample information now <br />
                        Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                      </p>
                    </div>
                    <div className="tab-pane fade" id="menu3" role="tabpanel">
                      <p>
                        Some other tab content or sample information now <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="px-0 border rounded-2 shadow-0">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Similar items</h5>
                      <div className="d-flex mb-3">
                        <a href="#" className="me-3">
                          <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp" style={{ minWidth: "96px", height: "96px" }} className="img-md img-thumbnail" alt="Product 1" />
                        </a>
                        <div className="info">
                          <a href="#" className="nav-link mb-1">
                            Rucksack Backpack Large <br />
                            Line Mounts
                          </a>
                          <strong className="text-dark"> $38.90</strong>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <a href="#" className="me-3">
                          <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp" style={{ minWidth: "96px", height: "96px" }} className="img-md img-thumbnail" alt="Product 2" />
                        </a>
                        <div className="info">
                          <a href="#" className="nav-link mb-1">
                            Summer New Men's Denim <br />
                            Jeans Shorts
                          </a>
                          <strong className="text-dark"> $29.50</strong>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <a href="#" className="me-3">
                          <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp" style={{ minWidth: "96px", height: "96px" }} className="img-md img-thumbnail" alt="Product 3" />
                        </a>
                        <div className="info">
                          <a href="#" className="nav-link mb-1"> T-shirts with multiple colors, for men and lady </a>
                          <strong className="text-dark"> $120.00</strong>
                        </div>
                      </div>
                      <div className="d-flex">
                        <a href="#" className="me-3">
                          <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp" style={{ minWidth: "96px", height: "96px" }} className="img-md img-thumbnail" alt="Product 4" />
                        </a>
                        <div className="info">
                          <a href="#" className="nav-link mb-1"> Blazer Suit Dress Jacket for Men, Blue color </a>
                          <strong className="text-dark"> $339.90</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Singleproduct;
