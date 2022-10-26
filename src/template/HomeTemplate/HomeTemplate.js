/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
// import { layDanhSachBannerAction } from "../../redux/actions/QuanLyPhimAction";
// import HomeCarousel from "../../page/Home/Carousel/HomeCarousel";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";

export default function HomeTemplate() {
  return (
    <div className="home-template">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}
