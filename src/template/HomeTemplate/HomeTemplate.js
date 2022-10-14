import React from "react";
import { Outlet } from "react-router-dom";
import HomeCarousel from "./layout/Carousel/HomeCarousel";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";

export default function HomeTemplate() {
  return (
    <div className="home-template">
      <Header />
      <HomeCarousel />
      <Outlet />
      <Footer />
    </div>
  );
}
