/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimAction";
import ListFilm from "./ListFilms/ListFilm";
import "./home.css";
import News from "./News/News";
export default function Home() {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  console.log("arr", arrFilm);
  const dispatch = useDispatch();

  const arrPhimDangChieu = arrFilm.filter(function (item) {
    return item.dangChieu === true;
  });

  const arrPhimSapChieu = arrFilm.filter(function (item) {
    return item.sapChieu === true;
  });
  console.log("arrPhimDangChieu", arrPhimDangChieu);
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
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
      </div>
    </div>
  );
}
