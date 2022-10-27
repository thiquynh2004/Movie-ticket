import { Tabs } from "antd";
import React from "react";
import "./listFilm.css";
import SwiperFilm from "./Swiper/SwiperFilm";
import {
  LAY_DANH_SACH_DANG_CHIEU,
  LAY_DANH_SACH_SAP_CHIEU,
} from "../../../redux/actions/types/QuanLyPhimType";
import { useDispatch, useSelector } from "react-redux";

// const onChange = (key) => {
//   console.log(key);
// };

export default function ListFilm(props) {
  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );
  // const { arrPhimDangChieu, arrPhimSapChieu } = props;
  const { arrFilm } = props;
  console.log("arrFilm", arrFilm);
  const activeClassDC = dangChieu === true ? "active" : "none-active";
  const activeClassSC = sapChieu === true ? "active" : "none-active";
  return (
    <div className="list-film py-12 px-8">
      <div className="button">
        <button
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
          onClick={() => {
            const action = { type: LAY_DANH_SACH_DANG_CHIEU };
            dispatch(action);
          }}
        >
          <span
            className={`${activeClassDC} relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0`}
          >
            PHIM ĐANG CHIẾU
          </span>
        </button>
        <button
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
          onClick={() => {
            const action = { type: LAY_DANH_SACH_SAP_CHIEU };
            dispatch(action);
          }}
        >
          <span
            className={`${activeClassSC} relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0`}
          >
            PHIM SẮP CHIẾU
          </span>
        </button>
      </div>

      <SwiperFilm arrFilm={arrFilm} />
    </div>
    // <Tabs
    //   className="py-20 mx-6"
    //   defaultActiveKey="1"
    //   onChange={onChange}
    //   items={[
    //     {
    //       label: (
    //         <h1 className=" sm:text-sm md:text-xl lg:text-2xl font-semibold text-cyan-400">
    //           PHIM ĐANG CHIẾU
    //         </h1>
    //       ),
    //       key: "1",
    //       // children: <NowShowing arrPhimDangChieu={arrPhimDangChieu} />,
    //     },
    //     {
    //       label: (
    //         <h1 className=" font-semibold sm:text-sm md:text-xl lg:text-2xl text-cyan-400">
    //           PHIM SẮP CHIẾU
    //         </h1>
    //       ),
    //       key: "2",
    //       // children: <CommingSoon arrPhimSapChieu={arrPhimSapChieu} />,
    //     },
    //   ]}
    // />
  );
}
