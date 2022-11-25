import React from 'react'
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Select } from "antd";
import moment from "moment";
import { editInfoUser, useNguoiDung } from '../../storeToolKit/NguoiDung';
import { useEffect } from 'react';
import _ from 'lodash';

const EditInfo = (props) => {
    
    const { infoUser } = useNguoiDung();
    // const { dataSignUp } = useSelectorAuth() ;
    // console.log("dataSignUp: ", dataSignUp);
    // const passwordCheck = dataSignUp.filter(pass => pass.email ===infoUser.email )
    // console.log("passwordCheck: ", passwordCheck);
    const password  =''
    // if(!passwordCheck.password){
    //     password = passwordCheck.password
    // }
    
    const dispatch = useDispatch();
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onBlur",
    });
    const { email, phone, skill, name, birthday, gender, certification } = infoUser;
    const {params} = props
    console.log("params: ", params);
    useEffect(() => {
        reset({
            email,
            password,
            phone,
            skill,
            name,
            birthday,
            gender,
            certification
        });
    }, [])
    return (
        <Div>
            <form
                onSubmit={handleSubmit((data) => {
                   
                   
                    dispatch(editInfoUser( data,params))
                   
                })}
                className="flex flex-col  p-6 "
            >
                <h1 className="text-2xl text-black mb-3 font-bold mx-auto">Modify personal information</h1>
                <div className="grid grid-cols-2 gap-8 mt-2">
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
                                    placeholder="Enter for change Password"
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
                        <div className="flex w-full">
                            <div className="items-center flex item ">
                                <i class="fa-solid fa-briefcase"></i>
                            </div>
                            <div className="w-full">
                                <input
                                    className="p-2 w-full"
                                    {...register("skill", {
                                        required: "Skill is required",
                                    })}
                                    type="text"
                                    placeholder="Enter Your Skill"
                                />
                                <p className="text-red-400">{errors?.skill?.message}</p>
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
                                    {...register("name", {
                                        required: "FullName is required",
                                    })}
                                    type="text"
                                    placeholder="Enter Your FullName"
                                />
                                <p className="text-red-400">{errors?.name?.message}</p>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <div className="items-center flex item ">
                                <i class="fa-solid fa-cake-candles"></i>
                            </div>
                            <div className="w-full">
                                <input
                                value={moment(birthday).format("DD-MM-YYYY")}
                                    className="p-2 w-full"
                                    {...register("birthday", {
                                        required: "Date of birth is required",
                                    })}
                                    placeholder="Enter Your Date of birth"
                                />
                                <p className="text-red-400">{errors?.birthday?.message}</p>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <div className="items-center flex item ">
                                <i class="fa-solid fa-venus-mars"></i>
                            </div>
                            <div className="w-full">
                                <select
                                    className="w-full p-2 bg-[#bfc7fe] selectType"
                                    name="gender"
                                    {...register("gender")}
                                >
                                    <option value="true">Male</option>
                                    <option value="false">Female</option>
                                </select>
                                <p className="text-red-400"></p>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <div className="items-center flex item ">
                                <i class="fa-solid fa-certificate"></i>
                            </div>
                            <div className="w-full">
                                <input
                                    className="p-2 w-full"
                                    {...register("certification", {
                                        required: "Certification is required",
                                    })}
                                    type="text"
                                    placeholder="Enter Your Certification"
                                />
                                <p className="text-red-400">{errors?.certification?.message}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-5">
                    <button
                        // onClick={()=>{ 
                        //     dispatch(editInfoUser(props.params))
                        // }}
                        type="submit"
                        className="bg-pink-500 py-2 text-white w-full rounded-lg text-2xl hover:bg-pink-600"
                    >
                        Edit
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


export default EditInfo