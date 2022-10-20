import { Tabs } from "antd";
import React from "react";
import CommingSoon from "./CommingSoon/CommingSoon";
import NowShowing from "./NowShowing/NowShowing";
import "./listFilm.css";

const onChange = (key) => {
  console.log(key);
};

export default function ListFilm(props) {
  const { arrPhimDangChieu, arrPhimSapChieu } = props;

  return (
    <Tabs
      className="py-20"
      defaultActiveKey="1"
      onChange={onChange}
      items={[
        {
          label: (
            <h1 className=" sm:text-sm md:text-xl lg:text-2xl font-semibold text-cyan-400">
              PHIM ĐANG CHIẾU
            </h1>
          ),
          key: "1",
          children: <NowShowing arrPhimDangChieu={arrPhimDangChieu} />,
        },
        {
          label: (
            <h1 className=" font-semibold sm:text-sm md:text-xl lg:text-2xl text-cyan-400">
              PHIM SẮP CHIẾU
            </h1>
          ),
          key: "2",
          children: <CommingSoon arrPhimSapChieu={arrPhimSapChieu} />,
        },
      ]}
    />
  );
}
