/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimAction";
import ListFilm from "./ListFilms/ListFilm";
import "./home.css";
import News from "./News/News";
import Cinema from "../Cinema/Cinema";
import { layThongTinLichChieuHeThongRapAction } from "../../redux/actions/QuanLyRapAction";
export default function Home() {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const {arrHeThongRap} = useSelector((state) => state.QuanLyRapReducer);
  // const {arrCumRap} = useSelector((state) => state.QuanLyRapReducer);
  console.log("arrHeThongRap", arrHeThongRap)
  // console.log("arrCumRap", arrCumRap)
  const dispatch = useDispatch();
  const arrPhimDangChieu = arrFilm.filter(function (item) {
    return item.dangChieu === true;
  });

  const arrPhimSapChieu = arrFilm.filter(function (item) {
    return item.sapChieu === true;
  });
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, []);
  useEffect(() => {
    dispatch(layThongTinLichChieuHeThongRapAction());
    // dispatch(layThongTinCumRapTheoHeThongAction(arrHeThongRap.maHeThongRap))
  }, []);

  return (
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
          <Cinema arrHeThongRap={arrHeThongRap}/>
        </div>
      </div>
    </div>
  );
}
