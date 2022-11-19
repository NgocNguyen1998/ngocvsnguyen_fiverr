import { Menu } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCongViec } from "../../storeToolKit/CongViec";
import { menuCongViec } from "../../storeToolKit/CongViec";

const SubMenuJobList = () => {
  const { jobsList } = useCongViec();
  const handleItemDetail = (job) => {
    return job?.dsNhomChiTietLoai?.map((ds) => {
      return ds.dsChiTietLoai?.map((detail, index) => {
        return {
          label: ds.dsChiTietLoai[index].tenChiTiet,
          key: Math.random() * 1000,
        };
      });
    });
  };

  const handleItemList = () => {
    return jobsList.map((job) => {
      const menu = handleItemDetail(job);
      console.log("menu", menu);
      return {
        label: job.tenLoaiCongViec,
        key: job.tenLoaiCongViec,
        children: menu.map((item) => item.map((label) => label)),
      };
    });
  };
  const items = handleItemList();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(menuCongViec());
  }, []);
  const [current, setCurrent] = useState("Graphics & Design");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      defaultSelectedKeys={["1"]}
      onClick={onClick}
      // selectedKeys={[current]}
      mode="horizontal"
      items={items}
      className="w-full"
    />
  );
};
export default SubMenuJobList;
