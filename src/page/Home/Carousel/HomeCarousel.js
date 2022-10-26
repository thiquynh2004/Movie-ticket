import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./homeCarousel.css";
import { Navigation } from "swiper";

export default function HomeCarousel(props) {
  const { arrBanner } = props;
  const renderImage = () => {
    return arrBanner.map((item, index) => {
      return (
        <SwiperSlide
          key={index}
          style={{ marginTop: "92px" }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <img
            src={item.hinhAnh}
            alt={item.tenPhim}
            className="w-full block object-contain"
          />
        </SwiperSlide>
      );
    });
  };
  return (
    <div className="wrap">
  
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {renderImage()}
        </Swiper>
    
    </div>
  );
}
