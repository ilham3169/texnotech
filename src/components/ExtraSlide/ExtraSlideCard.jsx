import React from "react";
import ExtraSlideData from "./ExtraSlideData";
import Slider from "react-slick";
import "./ExtraSlideCss.css";

const ExtraSlideCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: true, 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true, 
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {ExtraSlideData.map((value, index) => {
          return (
            <div className="box-cate product-top" key={index}>
              <div className="img img-cate">
                <img src={value.cover} alt="" />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default ExtraSlideCard;
