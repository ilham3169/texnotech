import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import shoppingData from "./shoppingData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ClipLoader } from "react-spinners";

const Slidecard = () => {
  const navigate = useNavigate();

  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleButtonClick = () => {
    // Redirect the user to the desired page
    navigate("/all-products/-1"); // Replace '/collections' with the actual path
  };

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch("https://back-texnotech.onrender.com/api/banners");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBanners(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // appendDots: (dots) => {
    //   return <ul style={{ margin: "0px" }}>{dots}</ul>;
    // },
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
      >
        <ClipLoader color="#3498db" size={50} />
      </div>
    );
  }

  return (
    <>
      <Slider {...settings}>
        {banners.map((value, index) => {
          return (
            <div className="box d_flex top" key={index} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <img
                  src={value.cover}
                  alt="slider-image"
                  fetchpriority="high"
                  style={{width: "1084px", height: "508px"}}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Slidecard;
