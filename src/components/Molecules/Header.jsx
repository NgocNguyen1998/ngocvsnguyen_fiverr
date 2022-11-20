import { Select } from "antd";
import Search from "antd/lib/input/Search";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import SubMenuJobList from "../JobList/SubMenuJobList";

export const Header = () => {
  const navigate = useNavigate();

  const onSearch = (data) => {
    navigate(`/jobList/${data}`);
  };
  return (
    <header className="bg-white  text-black fixed w-full z-10">
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
              Sign in
            </button>
            <button
              className="hover:text-white hover:bg-green-500 transition-all hover:border-transparent duration-500 text-green-500 font-bold border-green-300 rounded-md border-2 px-5 py-1"
              to="/"
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
