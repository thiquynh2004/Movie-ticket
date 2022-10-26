/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import BookingFilm from "./BookingFilm/BookingFilm";
import FilmInformation from "./FilmInformation/FilmInformation";
import "./filmDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { layThongTinPhimAction } from "../../redux/actions/QuanLyRapAction";

export default function FilmDetail() {
  const { filmDetail } = useSelector((state) => state.QuanLyPhimReducer);
  console.log("filmDetail", filmDetail);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layThongTinPhimAction(id));
  }, []);
  return (
    <div className="film-detail">
      {/* <span className="text-white font-semibold text-2xl px-4 hover:text-orange">
        <NavLink to="/">Trang Chủ</NavLink>
      </span>
      <span className="text-cyan-400 font-medium text-3xl">
        <NavLink to="#">{filmDetail.tenPhim}</NavLink>
      </span> */}
      <FilmInformation filmDetail={filmDetail} />
      <BookingFilm filmDetail={filmDetail} />
    </div>
  );
}
