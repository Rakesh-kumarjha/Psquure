
import React, { Component } from "react";
import Slider from "react-slick";
import Ddata from "./Ddata"




export default class AutoPlayMethods extends Component {


  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>

        <Slider ref={slider => (this.slider = slider)} {...settings}>
          {Ddata.map((value, index) => {
            return (
              <>
                <li key={index}
                  onClick={() => {
                    window.location.pathname = value.link;
                  }}>


                  <div
                    className="youtube-video"
                  // style={{ width: "76%" }}
                  >
                    <video
                    controls
                    autoPlay
                    muted
                    loop
                    src={value.cover}
                      style={{ width: "250px", borderRadius: "7px" }}
                    />
                  </div>
                </li>
              </>
            )
          })}
        </Slider>

      </div>
    );
  }
}