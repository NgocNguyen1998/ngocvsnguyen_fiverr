import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { layCongViecChiTiet, useCongViec } from "../../storeToolKit/CongViec";

export const JobDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { jobDetail } = useCongViec();

  useEffect(() => {
    dispatch(layCongViecChiTiet(id));
  }, []);
  const handleStar = (star) => {
    console.log(star);
    let stars = [];

    for (let i = 0; i < star; i++) {
      stars.push(
        <span className="text-yellow-500">
          <i class="fa-solid fa-star "></i>
        </span>
      );
    }
    return stars;
  };
  return (
    <Component className="container mx-auto mb-[300px]">
      {jobDetail.map((job, index) => (
        <div key={index} className="width-[70%]  flex ">
          <div className="left text-base pr-[115px]">
            <h3 className=" mt-5">
              <Link to="">{job.tenLoaiCongViec}</Link>
              <span className="mx-2 color text-gray-400">
                <i class="fa-solid fa-greater-than"></i>
              </span>
              <Link to="">{job.tenLoaiCongViec}</Link>

              <span className="mx-2 color text-gray-400">
                <i class="fa-solid fa-greater-than"></i>
              </span>
              <Link to="">{job.tenChiTietLoai}</Link>
            </h3>
            <h1 className="text-3xl w-300px    text-[#333]">
              {job.congViec.tenCongViec}
            </h1>
            <div className="flex">
              <img className="w-8 rounded-full" src={job.avatar} alt="avatar" />
              <span className="ml-3 text-black">{job.tenNguoiTao}</span>
              <span className="ml-2 text-gray-400">Level 2 Seller</span>
              <span className="w-[2px] h-5 bg-gray-300 mx-2"></span>
              <span>
                {handleStar(job.congViec.saoCongViec)}
                <span className="ml-1 text-yellow-500">
                  {job.congViec.saoCongViec}
                </span>
                <span className="mx-1 ">({job.congViec.danhGia})</span>
              </span>
              <span className="text-gray-400">
                {job.congViec.nguoiTao} Orders in Queue
              </span>
            </div>
            <div className="wrapper">
              <div className="overload flex absolute mt-9">
                <span className="slick left mx-2 color text-gray-400">
                  <i class="fa-solid fa-less-than"></i>
                </span>
                <img
                  className="w-[600px] block"
                  src={job.congViec.hinhAnh}
                  alt="..."
                />
                <span className="slick right mx-2 color text-gray-400">
                  <i class="fa-solid fa-greater-than"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="right flex-1"></div>
        </div>
      ))}
    </Component>
  );
};

const Component = styled.div`
  /* .wrapper {
    width: 105%;
    .overload {
      overflow: hidden;
      img {
        transition: all 0.5s;
      }
      &:hover img {
        scale: 1.1;
      }
    }
  } */
  .slick {
    display: inline-block;
    position: absolute;
    top: 50%;

    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;

    border-radius: 50%;
    box-shadow: 0 0 0 #333;
    display: flex;
    align-self: center;
    justify-self: center;
    box-shadow: -1px 2px 5px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  .left {
    left: -2%;
  }
  .right {
    right: -10%;
  }
`;
