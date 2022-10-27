import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./nowShowing.css";
import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
// // import { history } from "../../../../App";

export default function SwiperFilm(props) {
  const { arrFilm } = props;
  const navigate = useNavigate();
  const renderFilm = () => {
    return arrFilm.map((film, index) => {
      return (
        <SwiperSlide key={index}>
          <div
            key={index}
            className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => {
              navigate(`/detail/${film.maPhim}`);
            }}
          >
            <div className="h-64 w-full overflow-hidden ">
              <img
                className="transition ease-in-out delay-200 hover:scale-110 overflow-hidden"
                style={{ objectFit: "contain" }}
                src={film.hinhAnh}
                alt={film.tenPhim}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "../";
                }}
              />
            </div>
            <div className="p-2 h-28">
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
      {renderFilm()}
    </Swiper>
  );
}
