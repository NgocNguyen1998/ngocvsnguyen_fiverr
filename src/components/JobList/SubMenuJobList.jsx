import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCongViec } from "../../storeToolKit/CongViec";
import { menuCongViec } from "../../storeToolKit/CongViec";

const SubMenuJobList = () => {
  const { jobsList } = useCongViec();
  const handleItemDetail = (job) => {
    return job.dsNhomChiTietLoai.map((ds) => {
      return ds.dsChiTietLoai.map((detail) => {
        return {
          label: detail.tenChiTiet,
          key: detail.tenChiTiet,
        };
      });
    });
  };
  const handleItemList = () => {
    return jobsList.map((job) => {
      const result = handleItemDetail(job);
      console.log("result", result);
      return {
        label: job.tenLoaiCongViec,
        key: job.tenLoaiCongViec,
        children: job.dsNhomChiTietLoai.map((ds) => {
          return ds.dsChiTietLoai.map((detail) => {
            console.log("detail", detail.tenChiTiet);
            return {
              label: detail.tenChiTiet,
              key: detail.tenChiTiet,
            };
          });
        }),
      };
    });
  };
  const items = handleItemList();
  console.log(items);

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
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default SubMenuJobList;
