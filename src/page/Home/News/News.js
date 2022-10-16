import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./news.css";
import banner1 from "../../../asset/image/banner1.png";
import banner2 from "../../../asset/image/banner2.jpg";
import banner3 from "../../../asset/image/banner3.png";

export default function News() {
  return (
    <div className="news py-28">
      <h1 className="text-center text-3xl font-bold text-cyan-600">KHUYẾN MÃI</h1>
      <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
        <SwiperSlide>
          <img src={banner1} alt="banner_1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="banner_2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="banner_3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
