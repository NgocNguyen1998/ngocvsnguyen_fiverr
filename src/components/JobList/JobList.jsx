import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { congViecPhanTrangTimKiem } from "../../storeToolKit/CongViec/congViecReducer";
import { NavLogin } from "../Molecules/NavLogin/NavLogin";
import SubMenuJobList from "./SubMenuJobList";
import { Switch } from "antd";
import { useCongViec } from "../../storeToolKit/CongViec";
import { Pagination } from "antd";
import { Footer } from "../Molecules/Footer";

export const JobList = () => {
  const dispatch = useDispatch();

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const [number, setNumber] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(congViecPhanTrangTimKiem(number));
  }, [number]);
  const { itemRender } = useCongViec();
  console.log(itemRender);
  return (
    <Components className=" mx-auto">
      <div className="flex flex-row justify-between mt-10 container mx-auto">
        <div></div>
        <div className="flex flex-row justify-between mt-10 container mx-auto">
          <div className="flex gap-2">
            <select className="border-2">
              <option value="">Category</option>
            </select>
            <select className="border-2">
              <option value="">Service Option</option>
            </select>
            <select className="border-2">
              <option value="">Seller Details</option>
            </select>
            <select className="border-2">
              <option value="">Budget</option>
            </select>
            <select className="border-2">
              <option value="">Delivery Time</option>
            </select>
          </div>
          <div className="flex gap-8 ">
            <div>
              <Switch defaultChecked onChange={onChange} />
              <span>Pro services</span>
            </div>
            <div>
              <Switch defaultChecked onChange={onChange} />
              <span>Local sellers</span>
            </div>
            <div>
              <Switch defaultChecked onChange={onChange} />
              <span>Online sellers</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row grid grid-cols-4 gap-8 mt-10 container mx-auto">
        {itemRender?.map((list) => (
          <div
            className="card h-[370px] "
            onClick={() => navigate(`/jobDetail/${list.id}`)}
          >
            <img
              className="w-full h-[180px] flex-shrink-0"
              src={list.hinhAnh}
              alt={list.hinhAnh}
            />
            <div
              className="content flex flex-cols "
              style={{
                borderTop: "0",
                border: "1px solid #33333328",
                height: "calc(370px - 180px)",
                flex: 1,
              }}
            >
              <div className="mx-5 pt-5">
                <div className="user flex">
                  <img
                    className="rounded-[50%] flex-shrink-0"
                    src="http://picsum.photos/40/40"
                    alt="..."
                  />
                  <div className="card-name self-end ml-3">
                    <span>Mít...</span>
                  </div>
                </div>
                <h3 className="mt-4 mb-5 h-11  job">{list.tenCongViec}</h3>
                <div
                  className="card-footer mx-[-20px]  h-[45px]  "
                  style={{ borderTop: "1px solid #33333328", flex: 1 }}
                >
                  <div className="flex justify-between mx-5 h-[45px] items-center flex-shrink-0">
                    <div>
                      <i className="fa-solid fa-heart"></i>
                    </div>
                    <div className="footer-right">
                      <span>STARTING AT</span> {""}
                      <span>${list.giaTien}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Pagination
          onChange={(e) => setNumber(e)}
          total={36}
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} of ${total} items`
          }
          defaultPageSize={12}
          defaultCurrent={1}
        />
      </div>
      <div className="mt-8 container mx-auto">
        <Footer />
      </div>
    </Components>
  );
};
const Components = styled.div`
  ul {
    justify-content: center;
  }
  .job {
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  Link {
    font-size: 16px;
  }
  .ant-btn {
    background-color: #333;
    display: flex;
    align-items: center;
    border: 1px solid #333;
    border-radius: 0 5px 5px 0;
    .anticon-search {
      font-size: 20px;
    }
  }
`;
