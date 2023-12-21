// Carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Slider className="slider" {...settings}>
      {images.map((image, index) => (
        <div className="image-box" key={index}>
          <img src={image} alt={`slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
