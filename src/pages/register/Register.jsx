import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { signIn } from "../../storeToolKit/Auth/authReducer";
import { useNavigate } from "react-router-dom";
import { Select } from "antd";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const { Option } = Select;
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <Div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="flex flex-col  p-6 "
      >
        <h1 className="text-2xl text-black mb-3 font-bold mx-auto">LOGIN</h1>
        <div className="grid grid-cols-2 gap-5">
          <div className="itemRight">
            <div className=" flex w-full">
              <div className="items-center flex item ">
                <i className="fa-solid fa-envelope-circle-check"></i>
              </div>
              <div className="w-full">
                <input
                  className="p-2  w-full"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                  type="text"
                  placeholder="Enter Your Email"
                />
                <p className="text-red-400">{errors?.email?.message}</p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="items-center flex item ">
                <i className="fa-solid fa-unlock-keyhole"></i>
              </div>
              <div className="w-full">
                <input
                  className="p-2 w-full"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 3,
                      message: "Password must be between 3-12 characters",
                    },
                    maxLength: {
                      value: 12,
                      message: "Password must be between 3-12 characters",
                    },
                  })}
                  type="text"
                  placeholder="Enter Your Password"
                />
                <p className="text-red-400">{errors?.password?.message}</p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="items-center flex item ">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div className="w-full">
                <input
                  className="p-2 w-full"
                  {...register("phone", {
                    required: "Phone is required",
                    minLength: {
                      value: 9,
                      message: "Phone must be between 9-11 number",
                    },
                    maxLength: {
                      value: 11,
                      message: "Phone must be between 9-11 number",
                    },
                  })}
                  type="number"
                  placeholder="Enter Your Password"
                />
                <p className="text-red-400">{errors?.phone?.message}</p>
              </div>
            </div>
          </div>
          <div className="itemLeft">
            <div className=" flex w-full">
              <div className="items-center flex item ">
                <i class="fa-solid fa-user"></i>
              </div>
              <div className="w-full">
                <input
                  className="p-2  w-full"
                  {...register("ten", {
                    required: "FullName is required",
                  })}
                  type="text"
                  placeholder="Enter Your FullName"
                />
                <p className="text-red-400">{errors?.ten?.message}</p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="items-center flex item ">
                <i class="fa-solid fa-cake-candles"></i>
              </div>
              <div className="w-full">
                <input
                  className="p-2 w-full"
                  {...register("birthday", {
                    required: "Date of birth is required",
                  })}
                  type="text"
                  placeholder="Enter Your Date of birth"
                />
                <p className="text-red-400">{errors?.birthday?.message}</p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="items-center flex item ">
                <i className="fa-solid fa-unlock-keyhole"></i>
              </div>
              <div className="w-full">
                <Select
                  name="gender"
                  {...register("gender", {
                    required: "",
                  })}
                  defaultValue="lucy"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={[
                    {
                      value: true,
                      label: "Male",
                    },
                    {
                      value: false,
                      label: "Female",
                    },
                  ]}
                />
                {/* <input
                  className="p-2 w-full"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 3,
                      message: "Password must be between 3-12 characters",
                    },
                    maxLength: {
                      value: 12,
                      message: "Password must be between 3-12 characters",
                    },
                  })}
                  type="text"
                  placeholder="Enter Your Password"
                /> */}
                <p className="text-red-400">{errors?.password?.message}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-5">
          <button
            type="submit"
            className="bg-pink-500 py-2 text-white w-full rounded-lg text-2xl hover:bg-pink-600"
          >
            Sign Up
          </button>
        </div>
        <div className="flex gap-4 w-full mt-5 ">
          <button className="bg-blue-600 text-white w-full rounded-lg py-2 text-2xl hover:bg-blue-700">
            <i className="fa-brands fa-facebook-f"></i>
          </button>
          <button className="bg-blue-400 text-white w-full rounded-lg py-2 text-2xl hover:bg-blue-700">
            <i className="fa-brands fa-twitter"></i>
          </button>
        </div>
        <div className="mt-3">
          <span>Already a member?</span>
          <button
            className="ml-2 text-pink-500"
            onClick={() => navigate("/signIn")}
          >
            Sign In
          </button>
        </div>
      </form>
    </Div>
  );
};
export const Div = styled.div`
  background-color: #bfc7fe;

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
export default Register;
