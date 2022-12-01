import { Modal } from "antd";
import Search from "antd/lib/input/Search";
import { NavLink, useNavigate } from "react-router-dom";
import SubMenuJobList from "../JobList/SubMenuJobList";
import Login from "../../pages/Login/Login";
import {  useState } from "react";
import styled from "styled-components";
import Register from "../../pages/register/Register";

export const Header = () => {
  const [nav, setNav] = useState(1);
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
  let hiddenTagName = "";
  const userLogin = localStorage.getItem("userLogin");
  if (userLogin) {hiddenTagName = "hidden absolute"}
  
  const getUserLogin = () => {
    const userLogin = localStorage.getItem("userLogin");
    if (userLogin) {
      hiddenTagName = "hidden absolute";
      return (
        <Div className="flex gap-3 items-center text-base">
          <div className="flex gap-4">
            <span className="text-xl">
              <i class="fa-regular fa-bell"></i>
            </span>
            <span className="text-xl px-2">
              <i class="fa-regular fa-envelope"></i>
            </span>
            <span className="text-xl">
              <i class="fa-regular fa-heart"></i>
            </span>
            <span className="text-xl px-2">Order</span>
          </div>
          <div className="flex flex-cols m-0">
            <div className="items-end down">
              <p
                className="mb-0 tagName "
                onClick={() =>
                  navigate(`/infoUser/${JSON.parse(userLogin).id}`)
                }
              >
                {JSON.parse(userLogin).name.slice(0, 1).toUpperCase()}
              </p>
              <div className="w-[180px] h-[470px] ml-[-10px] info top-0  text-base text-white rounded-md bg-blue-400 absolute mt-8">
                <div className="relative ribbon">
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
          </div>
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
              
                className="flex items-center px-4 -mb-3 text-black font-medium hover:text-black"
                to="/"
              >
                Become a Seller
              </NavLink>
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
              className={`hover:text-white ${hiddenTagName}  hover:bg-green-500 transition-all hover:border-transparent duration-500 text-green-500 font-bold border-green-300 rounded-md border-2 px-5 py-1`}
              onClick={() => {
                showModalRegister();
              }}
            >
              Join
            </button>
          </div>
        </div>

        <button className="p-4 lg:hidden" onClick={() => {
          setNav(nav + 1)
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-black"
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
      <div style={{ display: `${nav % 2 === 0 ? 'block' : 'none'}` }} >
       <div className="lg:hidden">
       <div className="flex justify-center">
          <div className="pt-4 text-center">

          <div className="">
          <ul >
            <li >
              <NavLink
              onClick={()=>{
                setNav(nav + 1)
              }}
              className=" text-black font-medium hover:text-white"
              style={{fontSize:'16px'}}
                to="/"
              >
                Become a Seller
              </NavLink>
            </li>
          </ul>
          <div>
            <button className=" px-8 py-3 rounded text-black font-medium">
              {localStorage.getItem("userLogin") ?  <Div className="flex gap-3 items-center text-base">
          <div className="flex gap-4">
            <span className="text-xl">
              <i class="fa-regular fa-bell"  onClick={()=>{
                setNav(nav + 1)
              }}></i>
            </span>
            <span className="text-xl px-2">
              <i class="fa-regular fa-envelope"  onClick={()=>{
                setNav(nav + 1)
              }}></i>
            </span>
            <span className="text-xl">
              <i class="fa-regular fa-heart"  onClick={()=>{
                setNav(nav + 1)
              }}></i>
            </span>
            <span className="text-xl px-2"  onClick={()=>{
                setNav(nav + 1)
              }}>Order</span>
          </div>
          <div className="flex flex-cols m-0">
            <div className="items-end down">
              <p
                className="mb-0 tagName "
                onClick={() =>
                  {
                    setNav(nav + 1)
                    navigate(`/infoUser/${JSON.parse(userLogin).id}`)
                  }
                
                }
              >
                {JSON.parse(userLogin).name.slice(0, 1).toUpperCase()}
              </p>
              <div className="w-[180px] h-[470px] ml-[-10px] info top-0  text-base text-white rounded-md bg-blue-400 absolute mt-8">
                <div className="relative ribbon">
                  <div>
                    <p className="flex justify-start tagp gap-5 mt-4 items-center">
                      <p
                        className="mb-0 px-4"
                        onClick={() =>
                          {setNav(nav + 1)
                            navigate(`/infoUser/${JSON.parse(userLogin).id}`)}
                        }
                      >
                        Profile
                      </p>
                    </p>
                    <p className="flex justify-start tagp gap-5 mt-2 items-center">
                      <p className="mb-0 px-4"  onClick={()=>{
                setNav(nav + 1)
              }}>Post a Request</p>
                    </p>
                    <p className="flex justify-start tagp gap-5 mt-2 items-center">
                      <p className="mb-0 px-4"  onClick={()=>{
                setNav(nav + 1)
              }}>Refer a friend</p>
                    </p>
                  </div>
                  <hr />
                  <div>
                    <p className="flex justify-start tagp gap-5 mt-2 items-center">
                      <p className="mb-0 px-4"  onClick={()=>{
                setNav(nav + 1)
              }}>Become a Seller</p>
                    </p>
                    <p className="flex justify-start tagp gap-5 mt-2 items-center">
                      <p className="mb-0 px-4"  onClick={()=>{
                setNav(nav + 1)
              }}>Settings</p>
                    </p>
                    <p className="flex justify-start tagp gap-5 mt-2 items-center">
                      <p className="mb-0 px-4"  onClick={()=>{
                setNav(nav + 1)
              }}>Billing</p>
                    </p>
                  </div>
                  <hr />
                  <div>
                    <p className="flex justify-start tagp gap-5 mt-2 items-center">
                      <p className="mb-0 px-4"  onClick={()=>{
                setNav(nav + 1)
              }}>English</p>
                    </p>
                    <p className="flex justify-start tagp gap-5 mt-2 items-center">
                      <p className="mb-0 px-4"  onClick={()=>{
                setNav(nav + 1)
              }}>$ USD</p>
                    </p>
                    <p className="flex justify-start tagp gap-5 mt-2 items-center">
                      <p className="mb-0 px-4"  onClick={()=>{
                setNav(nav + 1)
              }}>Help & Support</p>
                    </p>
                  </div>
                  <hr />
                  <div>
                    <p className="flex justify-start tagp gap-5 mt-2 items-center">
                      <p
                        className="mb-0 px-4"
                        onClick={() => {
                          setNav(nav+1)
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
          </div>
        </Div> : (
                <p className=" mb-0" onClick={showModal}>
                  Sign in
                </p>
              )}
            </button>
            <div>
              <Modal
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
              className={`hover:text-white ${hiddenTagName}  hover:bg-green-500 transition-all hover:border-transparent duration-500 text-green-500 font-bold border-green-300 rounded-md border-2 px-5 py-1`}
              onClick={() => {
                showModalRegister();
              }}
            >
              Join
            </button>
          </div>
        </div>


          </div>
        </div>
       </div>
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
    z-index: 10;
    /* top: 100%; */
  }
  .down:hover .info {
    display: block;
  }
  .info {
    position: absolute;
    display: none;
    right: -25px;
    top: 25px;
  }
  .ribbon::before {
    content: "";
    position: absolute;
    top: -30px;
    right: 15px;
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
  .tagName {
    /* width: 40px;
    height: 40px; */
    position: relative;
    /* padding: 10px 15px; */
    height: 40px;
    width: 40px;
    padding: 10px;
    background-color: pink;
    border-radius: 50%;
    margin-right: -25px;
    font-size: 20px;
    &::after {
      content: "";
      bottom: 5px;
      right: 2px;
      display: block;
      position: absolute;
      background-color: #1dbf73;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      box-shadow: 0 0 0 2px white;
    }
  }
`;
