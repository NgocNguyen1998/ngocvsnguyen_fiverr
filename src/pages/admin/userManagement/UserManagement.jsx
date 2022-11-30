import { Input, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useNguoiDung } from "../../../storeToolKit/NguoiDung/nguoiDungSelector";
import {
  deleteUser,
  getInfoUser,
  getUSerList,
  searchUser,
} from "../../../storeToolKit/NguoiDung/nguoiDungReducer";
import { isArray } from "lodash";

const { Search } = Input;
const UserManagement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { usersList, user } = useNguoiDung();
  // console.log("usersList", isArray({}));
  let arr = [];
  if (isArray(usersList)) {
    arr = usersList;
  } else {
    arr.push(usersList);
  }

  useEffect(() => {
    dispatch(getUSerList());
  }, []);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: "5%",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
      defaultSortOrder: "descend",
    },
    {
      title: "FullName",
      dataIndex: "name",
      width: "15%",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      width: "10%",
      render: (text, data) => {
        if (data.gender.toString() === "true") {
          return <p>Male</p>;
        } else if (data.gender.toString() === "false") {
          return <p>Female</p>;
        }
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "10%",
    },
    {
      title: "Role",
      dataIndex: "role",
      width: "15%",
    },
    {
      title: "Skill",
      dataIndex: "skill",
      width: "15%",
      render: (text, data = []) => {
        if (data.skill) {
          console.log("data", data.skill);
          return data.skill.map((ski) => {
            return <span key={Math.random() * 1000}>{ski} ,</span>;
          });
        }
      },
    },
    {
      title: "Certification",
      dataIndex: "certification",
      width: "10%",
      render: (text, data = []) => {
        if (data.certification) {
          return data.certification.map((certification) => {
            return <span key={Math.random() * 1000}>{certification} </span>;
          });
        }
      },
    },
    {
      title: "Thao tác",
      dataIndex: "thaotac",
      render: (text, data) => {
        return (
          <React.Fragment key={Date.now()}>
            <button
              onClick={() => {
                // console.log(data);
                // const user = usersList.find((item) => item.id === data.id);
                localStorage.setItem("editUser", JSON.stringify(data));
                // dispatch(getInfoUser(data.id));
                navigate(`/admin/editUser/${data.id}`);
              }}
              title="chỉnh sửa"
              className="text-2xl text-blue-500"
            >
              <EditOutlined />
            </button>
            <button
              title="Xoá"
              className="ml-3 text-2xl text-red-400"
              onClick={() => dispatch(deleteUser(data.id))}
            >
              <DeleteOutlined />
            </button>
          </React.Fragment>
        );
      },
      width: "15%",
    },
  ];
  const data = arr;
  console.log(data);

  const onSearch = (value) => {
    console.log(value);
    dispatch(getUSerList(value));
  };
  return (
    <>
      <button
        onClick={() => navigate("/admin/addUser")}
        className="text-1xl mb-5 bg-blue-400 text-white p-3 rounded-md"
      >
        Add Admin
      </button>
      <br />
      <Search
        placeholder="input search id"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
        allowClear
      />
      <Table
        rowKey={(data) => data.id}
        columns={columns}
        dataSource={data}
        bordered
      />
    </>
  );
};
export default UserManagement;
