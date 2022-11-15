import Search from "antd/lib/input/Search";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { menuCongViec } from "../../storeToolKit/CongViec/congViecReducer";
import { loaiCongViec } from "../../storeToolKit/LoaiCongViec/loaiCongViecReducer";
import { NavLogin } from "../Molecules/NavLogin/NavLogin";
import SubMenuJobList from "./SubMenuJobList";

export const JobList = () => {
  const onSearch = () => {};
  return (
    <div className=" mx-auto">
      <header className="  border-b-2 ">
        <nav className="container mx-auto flex justify-between py-6 ">
          <div className="flex">
            <NavLink className="mr-5 text-2xl font-bold text-black" to="/home">
              Fiverr
            </NavLink>
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
              className="w-[800px] bg-black"
            />
          </div>
          <NavLogin />
        </nav>
      </header>
      <SubMenuJobList />
    </div>
  );
};
