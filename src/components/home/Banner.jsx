import Slider from "react-slick";
import {
  bannerImgFive,
  bannerImgFour,
  bannerImgOne,
  bannerImgThree,
  bannerImgTwo,
} from "../../assets";
import { useState } from "react";

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "210px",
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: "#131921",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                padding: "8px 0",
                border: "1px solid #f3a847",
                cursor: "pointer",
              }
            : {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: "#232F3E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                padding: "8px 0",
                border: "1px solid white",
                cursor: "pointer",
              }
        }
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <div className="w-full mt-10">
      <div className="w-full h-full relative">
        <Slider {...settings}>
          <div>
            <img src={bannerImgOne} alt="Banner-img1" />
          </div>
          <div>
            <img src={bannerImgTwo} alt="Banner-img1" />
          </div>
          <div>
            <img src={bannerImgThree} alt="Banner-img1" />
          </div>
          <div>
            <img src={bannerImgFour} alt="Banner-img1" />
          </div>
          <div>
            <img src={bannerImgFive} alt="Banner-img1" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
