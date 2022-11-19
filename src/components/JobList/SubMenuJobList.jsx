import { Menu } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCongViec } from "../../storeToolKit/CongViec";
import { menuCongViec } from "../../storeToolKit/CongViec";

const SubMenuJobList = () => {
  const { jobsList } = useCongViec();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(menuCongViec());
  }, []);

  return (
    <Menu mode="horizontal" >
      {jobsList.map((job) => {
        return <Menu.SubMenu key={job.tenLoaiCongViec} title={job.tenLoaiCongViec} >
          {job.dsNhomChiTietLoai.map(item => {
            return  item.dsChiTietLoai.map(data=>{
              return   <Menu.Item key={Math.floor(Math.random() * 10000) + 1000} >
              {data.tenChiTiet}
            </Menu.Item>
            })
          })}
        </Menu.SubMenu>
      })}
    </Menu>
  );
};
export default SubMenuJobList;
