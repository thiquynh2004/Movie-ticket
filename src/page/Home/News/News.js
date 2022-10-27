import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./news.css";
import banner1 from "../../../asset/image/banner1.png";
import banner2 from "../../../asset/image/banner2.jpg";
import banner3 from "../../../asset/image/banner3.png";
import { NavLink } from "react-router-dom";

export default function News() {
  return (
    <div className="news py-28 mx-6">
      <h1 className="m-5 text-center text-3xl font-bold text-cyan-600 ">
        KHUYẾN MÃI
      </h1>
      <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
        <SwiperSlide>
          <NavLink to="#">
            <img
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
              src={banner1}
              alt="banner_1"
            />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="#">
            <img
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
              src={banner2}
              alt="banner_2"
            />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="#">
            <img
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
              src={banner3}
              alt="banner_3"
            />
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
