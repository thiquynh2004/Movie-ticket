import { Radio, Space, Tabs } from "antd";
import React, { useState } from "react";
import {useSelector } from "react-redux";
// import { layThongTinCumRapTheoHeThongAction } from "../../redux/actions/QuanLyRapAction";
import moment from "moment";
import { NavLink } from "react-router-dom";

export default function Cinema(props) {
  const { arrHeThongRap } = props;
  const { arrCumRap } = useSelector((state) => state.QuanLyRapReducer);
  console.log("arrCumRap", arrCumRap);
  const [tabPosition, setTabPosition] = useState("left");
  // const dispatch = useDispatch();
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <div>
      <Space
        style={{
          marginBottom: 24,
        }}
      >
        Control position:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button value="top">top</Radio.Button>
          <Radio.Button value="bottom">bottom</Radio.Button>
          <Radio.Button value="left">left</Radio.Button>
          <Radio.Button value="right">right</Radio.Button>
        </Radio.Group>
      </Space>
      <Tabs
        tabPosition={tabPosition}
        items={arrHeThongRap.map((heThongRap, index) => {
          return {
            label: (
              <img
                className="w-12 h-12"
                src={heThongRap.logo}
                alt={heThongRap.tenHeThongRap}
                key={index}
              />
            ),
            key: heThongRap.maHeThongRap,
            children: (
              <>
                <Tabs
                  tabPosition={tabPosition}
                  items={heThongRap.lstCumRap.map((cumRap, index) => {
                    return {
                      label: (
                        <div key={index} className="w-56 break-all ">
                          <h2>{cumRap.tenCumRap}</h2>

                          <p>Chi tiết</p>
                        </div>
                      ),
                      key: cumRap.maCumRap,
                      children: (
                        <>
                          {cumRap.danhSachPhim.map((danhSachPhim, index) => {
                            return (
                              <>
                                <div className="flex gap-4 m-3" key={index}>
                                  <div className="flex w-48">
                                    <img
                                      className="w-40 h-40"
                                      src={danhSachPhim.hinhAnh}
                                      alt={danhSachPhim.tenPhim}
                                    />
                                  </div>
                                  <div className=" w-full">
                                    <h1 className="font-bold text-base">
                                      {danhSachPhim.tenPhim}
                                    </h1>
                                    <p>{cumRap.diaChi}</p>
                                    <div className="grid grid-cols-6 gap-3.5">
                                      {danhSachPhim.lstLichChieuTheoPhim.map(
                                        (lichChieu, index) => {
                                          return (
                                            <NavLink
                                              to="#"
                                              key={index}
                                              className="p-px rounded-r-sm border border-solid border-cyan-300"
                                            >
                                              {moment(
                                                lichChieu.ngayChieuGioChieu
                                              ).format("hh:mm A")}
                                            </NavLink>
                                          );
                                        }
                                      )}
                                      {/* <DatePicker value={moment(danhSachPhim.lstLichChieuTheoPhim.ngayChieuGioChieu)} format={dateFormatList} /> */}
                                    </div>
                                  </div>
                                </div>
                                <hr />
                              </>
                            );
                          })}
                        </>
                      ),
                    };
                  })}
                />
              </>
            ),
          };
        })}
      />
    </div>
  );
}
