import { DatePicker, List, Radio, Space, Tabs } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { layThongTinCumRapTheoHeThongAction } from "../../redux/actions/QuanLyRapAction";
import moment from "moment";
import { NavLink } from "react-router-dom";
// import VirtualList from "rc-virtual-list";

export default function Cinema(props) {
  const { arrHeThongRap } = props;
  const { arrCumRap } = useSelector((state) => state.QuanLyRapReducer);
  console.log("arrCumRap", arrCumRap);
  const [tabPosition, setTabPosition] = useState("left");
  // const dispatch = useDispatch();
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];


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
      <List>
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
                          <>
                            <div key={index} className="w-full">
                              <h2>{cumRap.tenCumRap}</h2>
                              <p className="text-start">Chi tiết</p>
                            </div>
                            <hr className="w-full" />
                          </>
                        ),
                        key: cumRap.maCumRap,
                        children: (
                          <>
                            {cumRap.danhSachPhim.map((phim, index) => {
                              return (
                                <>
                                  <div className="flex gap-4 m-3" key={index}>
                                    <div className="flex w-48">
                                      <img
                                        className="w-40 h-40"
                                        src={phim.hinhAnh}
                                        alt={phim.tenPhim}
                                      />
                                    </div>
                                    <div className=" w-full">
                                      <h1 className="font-bold text-base">
                                        {phim.tenPhim}
                                      </h1>
                                      <p>{cumRap.diaChi}</p>
                                      <div className="grid grid-cols-4 gap-3.5 text-center">
                                        {phim.lstLichChieuTheoPhim
                                          .slice(0, 8)
                                          .map((lichChieu, index) => {
                                            return (
                                              <NavLink
                                                to="#"
                                                key={index}
                                                className="p-px rounded-r-sm border border-solid border-cyan-300"
                                              >
                                                {moment(
                                                  lichChieu.ngayChieuGioChieu
                                                ).format("hh:mm A")}
                                                <DatePicker
                                                  value={moment(
                                                    lichChieu.ngayChieuGioChieu
                                                  )}
                                                  format={dateFormatList}
                                                />
                                              </NavLink>
                                            );
                                          })}
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
      </List>
    </div>
  );
}
