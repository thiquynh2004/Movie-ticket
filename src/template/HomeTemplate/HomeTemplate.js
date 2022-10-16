/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { layDanhSachBannerAction } from "../../redux/actions/QuanLyPhimAction";
import HomeCarousel from "./layout/Carousel/HomeCarousel";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";

export default function HomeTemplate() {
  const { arrBanner } = useSelector((state) => state.QuanLyPhimReducer);
  const dispatch = useDispatch();
  console.log("arrBanner", arrBanner);
  useEffect(() => {
    dispatch(layDanhSachBannerAction());
  }, []);
  return (
    <div className="home-template">
      <Header />
      <HomeCarousel arrBanner={arrBanner} />
      <Outlet />
      <Footer />
    </div>
  );
}
