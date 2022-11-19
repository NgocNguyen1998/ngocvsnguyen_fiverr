import Search from "antd/lib/input/Search";

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SubMenuJobList from "../JobList/SubMenuJobList";
import { NavLogin } from "./NavLogin/NavLogin";

export const Header = () => {
  const onSearch = () => {};
  return (
    <div>
      <Head className="  border-b-2 ">
        <nav className="container mx-auto flex justify-between py-6 ">
          <div className="flex">
            <NavLink className="mr-5 text-2xl font-bold text-black" to="/home">
              Fiverr
            </NavLink>

            <div className="w-[500px] font-semibold rounded">
              <Search
                // size="large"
                placeholder="What services are you looking for today?"
                onSearch={onSearch}
                enterButton
                allowClear
              />
            </div>
          </div>
          <NavLogin />
        </nav>
      </Head>
      <div className="justify-center flex">
        <SubMenuJobList />
      </div>
    </div>
  );
};

export const Head = styled.header`
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
