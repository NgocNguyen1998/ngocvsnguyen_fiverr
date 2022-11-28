import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {  signUp } from "../../storeToolKit/Auth/authReducer";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useNguoiDung } from "../../storeToolKit/NguoiDung";
import { postWork } from "../../storeToolKit/CongViec/congViecReducer";
const PostWork = (props) => {
    const {idUser} = props
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
//   const { infoUser } = useNguoiDung();
//   console.log("infoUser: ", infoUser);
  return (
    <Div>
      <form
        onSubmit={handleSubmit((data) => {
      const data5= {
        id: +idUser,
        tenCongViec: data.tenCongViec,
        danhGia: +data.danhGia,
        giaTien: +data.giaTien,
        nguoiTao: +idUser,
        hinhAnh: data.hinhAnh,
        moTa: data.moTa,
        maChiTietLoaiCongViec: +data.maChiTietLoaiCongViec,
        moTaNgan: data.moTaNgan,
        saoCongViec: +data.saoCongViec
      }
          console.log(data5);
          dispatch(postWork(data5));
        })}
        className="flex flex-col  p-6 "
      >
        <h1 className="text-2xl text-black mb-3 font-bold mx-auto">Create Work</h1>
        <div className="grid grid-cols-2 gap-8 mt-2">
          <div className="itemRight">
            <div className=" flex w-full">
              <div className="items-center flex item ">
                <i className="fa-solid fa-envelope-circle-check"></i>
              </div>
              <div className="w-full">
                <input
                  className="p-2  w-full"
                  {...register("tenCongViec", {
                    required: "Work name is required",
                  })}
                  type="text"
                  placeholder="Enter Your Work Name"
                />
                <p className="text-red-400">{errors?.tenCongViec?.message}</p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="items-center flex item ">
                <i className="fa-solid fa-unlock-keyhole"></i>
              </div>
              <div className="w-full">
                <input
                  className="p-2 w-full"
                  {...register("danhGia", {
                    required: "Rate is required",
                    minLength: {
                      value: 1,
                      message: "Rate must be 1 characters",
                    },
                    maxLength: {
                      value: 1,
                      message: "Rate must be 1 characters",
                    },
                  })}
                  type="number"
                  placeholder="Enter Your Rate"
                />
                <p className="text-red-400">{errors?.danhGia?.message}</p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="items-center flex item ">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div className="w-full">
                <input
                  className="p-2 w-full"
                  {...register("giaTien", {
                    required: "Price is required",
        
                  })}
                  type="number"
                  placeholder="Enter Your Price"
                />
                <p className="text-red-400">{errors?.giaTien?.message}</p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="items-center flex item ">
                <i class="fa-solid fa-briefcase"></i>
              </div>
              <div className="w-full">
                <input
                  className="p-2 w-full"
                  {...register("moTa", {
                    required: "Desc is required",
                  })}
                  type="text"
                  placeholder="Enter Your Desc"
                />
                <p className="text-red-400">{errors?.moTa?.message}</p>
              </div>
            </div>
          </div>
          <div className="itemLeft">
            <div className=" flex w-full">
              <div className="items-center flex item ">
                <i class="fa-sharp fa-solid fa-file-signature"></i>
              </div>
              <div className="w-full">
                <input
                  className="p-2  w-full"
                  {...register("moTaNgan", {
                    required: "Desc is required",
                  })}
                  type="text"
                  placeholder="Enter Your desc"
                />
                <p className="text-red-400">{errors?.moTaNgan?.message}</p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="items-center flex item ">
                <i class="fa-solid fa-cake-candles"></i>
              </div>
              <div className="w-full">
                <input
                  className="p-2 w-full"
                  {...register("maChiTietLoaiCongViec", {
                    required: "Code of work is required",
                  })}
                  type="number"
                  placeholder="Enter Your work code"
                />
                <p className="text-red-400">{errors?.maChiTietLoaiCongViec?.message}</p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="items-center flex item ">
                <i class="fa-solid fa-cake-candles"></i>
              </div>
            <div className="w-full">
                <input
                  className="p-2 w-full"
                  {...register("saoCongViec", {
                    required: "Star of work is required",
                    minLength: {
                        value: 1,
                        message: "Star must be 1 characters",
                      },
                      maxLength: {
                        value: 1,
                        message: "Star must be 1 characters",
                      },
                  })}
                  type="number"
                  placeholder="Enter Your work star"
                />
                <p className="text-red-400">{errors?.saoCongViec?.message}</p>
              </div>
           </div>
           <div className="flex w-full">
              <div className="items-center flex item ">
                <i class="fa-solid fa-cake-candles"></i>
              </div>
            <div className="w-full">
                <input
                  className="p-2 w-full"
                  {...register("hinhAnh", {
                    required: "Img of work is required",
                  })}
                  type="text"
                  placeholder="Enter Your work img link"
                />
                <p className="text-red-400">{errors?.hinhAnh?.message}</p>
              </div>
           </div>
          </div>
        </div>
        <div className="w-full mt-5">
          <button
            type="submit"
            className="bg-pink-500 py-2 text-white w-full rounded-lg text-2xl hover:bg-pink-600"
          >
           Add
          </button>
        </div>
        
       
      </form>
    </Div>
  );
};
export const Div = styled.div`
  background-color: #bfc7fe;
  .selectType {
    position: relative;
    outline: none;
    border-bottom: 1px solid #ec4899;
  }
  .selectType::after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid pink;
    border-color: pink transparent transparent transparent;
  }

  .item {
    margin-bottom: 5px;
    font-size: 20px;
    width: 30px;
    margin-right: 5px;
    color: #ffffff61;
  }
  input {
    position: relative;
    border-bottom: 1px solid #ec4899;
    transition: all 0.5s;
    background-color: transparent;

    &:focus {
      border-bottom: 1px solid #60a5fa;
      box-shadow: none;
      outline: none;
    }
  }
`;
export default PostWork;
