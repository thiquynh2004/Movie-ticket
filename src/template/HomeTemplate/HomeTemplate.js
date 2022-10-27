/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
// import { layDanhSachBannerAction } from "../../redux/actions/QuanLyPhimAction";
// import HomeCarousel from "../../page/Home/Carousel/HomeCarousel";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";

export default function HomeTemplate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-template">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}
