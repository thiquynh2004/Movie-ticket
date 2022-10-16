import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./nowShowing.css";
import { Pagination, Navigation } from "swiper";

export default function NowShowing(props) {
  const { arrPhimDangChieu } = props;
  const renderPhimDangChieu = () => {
    return arrPhimDangChieu.map((film, index) => {
      return (
        <SwiperSlide key={index}>
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <div
              style={{
                backgroundImage: `url(${film.hinhAnh})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "400px",
                width: "290px",
              }}
            ></div>
            <div className="p-6 h-36">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                CATEGORY
              </h2>
              <h1 className="title-font text-lg font-medium text-black mb-3">
                {film.tenPhim}
              </h1>
            </div>
            <div>
              <button className="bottom-0 bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Đặt vé
              </button>
            </div>
          </div>
        </SwiperSlide>
      );
    });
  };
  return (
    <div className="now-showing">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {renderPhimDangChieu()}
      </Swiper>
    </div>
    // </div>
    // </section>
    // </div>
  );
}
