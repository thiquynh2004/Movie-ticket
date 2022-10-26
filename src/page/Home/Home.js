/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  layDanhSachBannerAction,
  layDanhSachPhimAction,
} from "../../redux/actions/QuanLyPhimAction";
import ListFilm from "./ListFilms/ListFilm";
import "./home.css";
import News from "./News/News";
import Cinema from "../Cinema/Cinema";
import { layThongTinLichChieuHeThongRapAction } from "../../redux/actions/QuanLyRapAction";
import HomeCarousel from "./Carousel/HomeCarousel";
export default function Home() {
  const { arrBanner } = useSelector((state) => state.QuanLyPhimReducer);
  console.log("arrBanner", arrBanner);

  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { arrHeThongRap } = useSelector((state) => state.QuanLyRapReducer);
  // const {arrCumRap} = useSelector((state) => state.QuanLyRapReducer);
  console.log("arrHeThongRap", arrHeThongRap);
  // console.log("arrCumRap", arrCumRap)
  const dispatch = useDispatch();
  const arrPhimDangChieu = arrFilm.filter(function (item) {
    return item.dangChieu === true;
  });

  const arrPhimSapChieu = arrFilm.filter(function (item) {
    return item.sapChieu === true;
  });
  useEffect(() => {
    dispatch(layDanhSachBannerAction());
  }, []);
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, []);
  useEffect(() => {
    dispatch(layThongTinLichChieuHeThongRapAction());
  }, []);

  return (
    <>
      <HomeCarousel arrBanner={arrBanner} />
      <div className="home py-28">
        <div className="container mx-auto">
          <div className="list-film">
            <ListFilm
              arrPhimDangChieu={arrPhimDangChieu}
              arrPhimSapChieu={arrPhimSapChieu}
            />
          </div>
          <div className="news">
            <News />
          </div>
          <div className="cinema">
            <Cinema arrHeThongRap={arrHeThongRap} />
          </div>
        </div>
      </div>
    </>
  );
}
