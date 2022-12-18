import React from 'react'
import Slider from "react-slick";
import "./index.css";

function Carousel() {
    var settings = {
        dots: true
      };
  return (
    <div className="container">
            <Slider {...settings}>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
        </div>
  )
}

export default Carousel