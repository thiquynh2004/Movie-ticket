import { Carousel } from "antd";
import React from "react";
import slide1 from "../../../../asset/image/slide1.jpg";
import slide2 from "../../../../asset/image/slider2.jpg";
import slide3 from "../../../../asset/image/slider3.png";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

export default function HomeCarousel() {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            <img src={slide1} alt="slider_1"/>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
          <img src={slide2} alt="slider_2"/>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
          <img src={slide3} alt="slider_3"/>
          </h3>
        </div>
      </Carousel>
    </div>
  );
}
