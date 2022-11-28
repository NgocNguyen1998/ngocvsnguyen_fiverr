import { Input, Modal, Table } from "antd";
import React, { useEffect } from "react";
import {
    SearchOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCongViec } from "../../../storeToolKit/CongViec";
import { deleteWork, getWork } from "../../../storeToolKit/CongViec/congViecReducer";
import { useState } from "react";
import PostWork from "./PostWork";

const { Search } = Input;
const JobManagement = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { workList } = useCongViec();
    console.log("workList: ", workList);
    const [isModalOpenAddJob, setisModalOpenAddJob] = useState(false);
    const showModalAddJob = () => {
        setisModalOpenAddJob(true);
    };
    const handleOkAddJob = () => {
        setisModalOpenAddJob(false);
    };
    const handleCancelAddJob = () => {
        setisModalOpenAddJob(false);
    };

    useEffect(() => {
        dispatch(getWork());
    }, []);

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            width: "5%",
        },
        {
            title: "Job Name",
            dataIndex: "tenCongViec",
            width: "20%",
        },
        {
            title: "Desc",
            dataIndex: "moTaNgan",
            width: "25%",
        },
        {
            title: "JobType Code",
            dataIndex: "maChiTietLoaiCongViec",
            width: "5%",
        },
        {
            title: "Rate (*****)",
            dataIndex: "saoCongViec",
            width: "5%",
        },
        {
            title: "Price ($)",
            dataIndex: "giaTien",
            width: "5%",
        },
        {
            title: "Number of reviews ",
            dataIndex: "danhGia",
            width: "10%",
        },
        {
            title: "Actions",
            dataIndex: "thaotac",
            render: (text, data) => {
                return (
                    <React.Fragment key={Date.now()}>
                        <button
                              onClick={() => {
                                const jobEdit = workList.find((item) => item.id === data.id);
                                localStorage.setItem("jobEdit", JSON.stringify(jobEdit));
                                // navigate(`/admin/editUser/${data.id}`);
                              }}
                         
                            title="chỉnh sửa"
                            className="text-2xl text-blue-500"
                        >
                            <EditOutlined />
                        </button>
                        <button
                            onClick={() => {
                                dispatch(deleteWork(data.id))
                            }}
                            title="Xoá"
                            className="ml-3 text-2xl text-red-400"
                        >
                            <DeleteOutlined />
                        </button>
                    </React.Fragment>
                );
            },
            width: "10%",
        },
    ];
    const data = workList;

    const onSearch = (value) => {

    };
    return (
        <>
            <button
   onClick={() => {
    showModalAddJob();
}}
                className="text-1xl mb-4 bg-blue-400 text-white p-3 rounded-md"
            >
                Add Job
            </button>
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
            <div>
                <Modal
                    open={isModalOpenAddJob}
                    onOk={handleOkAddJob}
                    onCancel={handleCancelAddJob}
                    footer={null}
                    width="600px"
                >
                    <PostWork  />
                </Modal>
            </div>
        </>
    );
};
export default JobManagement;
