import { List } from "antd";
import React from "react";
// import { NavLink } from "react-router-dom";

export default function CommingSoon(props) {
  const { arrPhimSapChieu } = props;

  return (
    <div>
      <List
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 17,
        }}
        dataSource={arrPhimSapChieu}
      >
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {arrPhimSapChieu.map((item, index) => {
                return (
                  <div className="p-4 md:w-1/4" key={index}>
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        className="lg:h-96 md:h-36 w-full object-cover object-center"
                        src={item.hinhAnh}
                        alt="blog"
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          CATEGORY
                        </h2>
                        <h1 className="title-font text-lg font-medium text-white mb-3">
                          {item.tenPhim}
                        </h1>

                        <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            Đặt vé
                          </button>
                      </div>
                    </div>
                    
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </List>
    </div>
  );
}
