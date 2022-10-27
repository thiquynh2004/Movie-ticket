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
    window.scrollTo(0,0);
  }, []);
  return (
    <div className="film-detail">
      <FilmInformation filmDetail={filmDetail} />
      <BookingFilm filmDetail={filmDetail} />
    </div>
  );
}
