import { Dropdown, Menu, Modal, Select, Space, Typography } from "antd";
import Search from "antd/lib/input/Search";
import { NavLink, useNavigate } from "react-router-dom";
import { showModal } from "../../pages/Login/Login";
import SubMenuJobList from "../JobList/SubMenuJobList";
import Login from "../../pages/Login/Login";
import { useState } from "react";
import styled from "styled-components";
import {
  CaretDownOutlined,
  DownOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Fragment } from "react";
import Register from "../../pages/register/Register";

export const Header = () => {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  const onSearch = (data) => {
    navigate(`/jobList/${data}`);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenRegister, setIsModalOpenRegister] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModalRegister = () => {
    setIsModalOpenRegister(true);
  };
  const handleOkRegister = () => {
    setIsModalOpenRegister(false);
  };
  const handleCancelRegister = () => {
    setIsModalOpenRegister(false);
  };
  const getUserLogin = () => {
    const userLogin = localStorage.getItem("userLogin");
    if (userLogin) {
      return (
        <Div className="flex gap-3 items-center ">
          <img
            className="rounded-full"
            src="http://picsum.photos/40/40"
            alt="avatar"
          />
          <p
            className="mb-0"
            onClick={() => navigate(`/infoUser/${JSON.parse(userLogin).id}`)}
          >
            {JSON.parse(userLogin).name}
          </p>
          <p className="flex flex-cols m-0">
            <div className="items-end down">
              <i class="fa-sharp fa-solid fa-caret-down"></i>
              <div className="w-[180px] h-[470px] ml-[-10px] info top-0  text-base text-white rounded-md bg-blue-400 absolute mt-8">
                <div className="relative ribbon">
                  {/* <p
                  className="absolute right-2 top-[-20px]"
                  onClick={() =>
                    (document.body.querySelector(".info").style.display =
                      "none")
                  }
                >
                  x
                </p> */}
                  <div>
                    <p className="flex justify-start tagp gap-5 mt-4 items-center">
                      <p
                        className="mb-0 px-4"
                        onClick={() =>
                          navigate(`/infoUser/${JSON.parse(userLogin).id}`)
                        }
                      >
                        Profile
                      </p>
                    </p>
                    <p className="flex justify-start tagp gap-5 mt-4 items-center">
                      <p className="mb-0 px-4">Post a Request</p>
                    </p>
                    <p className="flex justify-start tagp gap-5 mt-4 items-center">
                      <p className="mb-0 px-4">Refer a friend</p>
                    </p>
                  </div>
                  <hr />
                  <div>
                    <p className="flex justify-start tagp gap-5 mt-4 items-center">
                      <p className="mb-0 px-4">Become a Seller</p>
                    </p>
                    <p className="flex justify-start tagp gap-5 mt-4 items-center">
                      <p className="mb-0 px-4">Settings</p>
                    </p>
                    <p className="flex justify-start tagp gap-5 mt-4 items-center">
                      <p className="mb-0 px-4">Billing</p>
                    </p>
                  </div>
                  <hr />
                  <div>
                    <p className="flex justify-start tagp gap-5 mt-4 items-center">
                      <p className="mb-0 px-4">English</p>
                    </p>
                    <p className="flex justify-start tagp gap-5 mt-4 items-center">
                      <p className="mb-0 px-4">$ USD</p>
                    </p>
                    <p className="flex justify-start tagp gap-5 mt-4 items-center">
                      <p className="mb-0 px-4">Help & Support</p>
                    </p>
                  </div>
                  <hr />
                  <div>
                    <p className="flex justify-start tagp gap-5 mt-4 items-center">
                      <p
                        className="mb-0 px-4"
                        onClick={() => {
                          navigate("");
                          if (localStorage.getItem("userLogin")) {
                            localStorage.removeItem("userLogin");
                            setUser(!user);
                          }
                        }}
                      >
                        Log out
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </p>
        </Div>
      );
    }
  };
  return (
    <header className="bg-transparent text-black w-full z-10 backgroundcheck header-section">
      <div className="container flex justify-between h-20 mx-auto">
        <NavLink
          to="/"
          aria-label="Back to homepage"
          className="flex items-center pb-1 text-3xl font-bold text-black"
        >
          Fiverr
        </NavLink>
        <div className="w-[500px] font-semibold rounded header-section py-6">
          <Search
            placeholder="What services are you looking for today?"
            onSearch={onSearch}
            enterButton
            allowClear
            className="inputcheck"
            style={{ display: "none" }}
          />
        </div>
        <div className="flex">
          <ul className="items-stretch hidden space-x-3 lg:flex pl-20">
            <li className="flex">
              <NavLink
                className="flex items-center px-4 -mb-3 text-black font-medium"
                to="/"
              >
                Become a Seller
              </NavLink>
            </li>
            <li className="flex  items-center px-4 -mb-3 text-black font-medium">
              <Select
                defaultValue="en"
                className="header-input"
                style={{
                  width: 100,
                  color: "black",
                  borderRadius: "5px",
                }}
              />
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="self-center px-8 py-3 rounded text-black font-medium">
              {localStorage.getItem("userLogin") ? (
                getUserLogin()
              ) : (
                <p className=" mb-0" onClick={showModal}>
                  Sign in
                </p>
              )}
            </button>
            <div>
              <Modal
                // title="Login"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                width="400px"
              >
                <Login />
              </Modal>
            </div>
            <div>
              <Modal
                // title="Login"
                open={isModalOpenRegister}
                onOk={handleOkRegister}
                onCancel={handleCancelRegister}
                footer={null}
                width="600px"
              >
                <Register />
              </Modal>
            </div>
            <button
              className="hover:text-white hover:bg-green-500 transition-all hover:border-transparent duration-500 text-green-500 font-bold border-green-300 rounded-md border-2 px-5 py-1"
              onClick={() => {
                showModalRegister();
              }}
            >
              Join
            </button>
          </div>
        </div>

        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <hr />
      <div className=" text-center header-submenu">
        <SubMenuJobList />
      </div>
    </header>
  );
};

const Div = styled.div`
  .down {
    position: relative;
    top: 100%;

    /* &::after {
      content: "";
      position: absolute;
      top: 10px;
      width: 200px;
      height: 30px;
      left: 0;
      right: 0;
      display: block;
      background-color: red;
    } */
  }
  .down:hover .info {
    display: block;
  }
  .info {
    /* position: relative; */
    display: none;
  }
  .ribbon::before {
    content: "";
    position: absolute;
    top: -29px;
    left: 7px;
    border-top: 7px solid transparent;
    border-left: 7px solid transparent;
    border-bottom: 7px solid #60a5fa;
    border-right: 7px solid transparent;
  }
  .ribbon::after {
    content: "";
    position: absolute;
    top: -36px;
    width: 100%;
    height: 30px;
    left: 0;
    right: 0;
    display: block;
    background-color: transparent;
  }
  .tagp:hover {
    background-color: #20549526;
  }
`;
