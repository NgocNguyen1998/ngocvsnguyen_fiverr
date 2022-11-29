import { Input, Modal, Table } from "antd";
import React, { useEffect } from "react";
import {
    SearchOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useCongViec } from "../../../storeToolKit/CongViec";
import { deleteWork, getWork, searchWork } from "../../../storeToolKit/CongViec/congViecReducer";
import { useState } from "react";
import PostWork from "./PostWork";
import EditJob from "./EditJob";

const { Search } = Input;
const JobManagement = () => {
    const dispatch = useDispatch();
    const { workList, searchJob } = useCongViec();
    console.log("searchJob: ", searchJob);
    console.log("workList: ", workList);
    const [isModalOpenAddJob, setisModalOpenAddJob] = useState(false);
    const [isModalOpenEditJob, setisModalOpenEditJob] = useState(false);
    const showModalAddJob = () => {
        setisModalOpenAddJob(true);
    };
    const handleOkAddJob = () => {
        setisModalOpenAddJob(false);
    };
    const handleCancelAddJob = () => {
        setisModalOpenAddJob(false);
    };
    const showModalEditJob = () => {
        setisModalOpenEditJob(true);
    };
    const handleOkEditJob = () => {
        setisModalOpenEditJob(false);
    };
    const handleCancelEditJob = () => {
        setisModalOpenEditJob(false);
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
                                showModalEditJob();

                            }}

                            title="chỉnh sửa"
                            className="text-2xl text-blue-500"
                        >
                            <EditOutlined />
                        </button>
                        <button
                            onClick={() => {
                                dispatch(deleteWork(data.id))
                                console.log(data);
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

    let data = workList;

    const onSearch = (value) => {
        let nameSearch = value.toLocaleLowerCase()
        if (value === '') {
          window.location.reload()
        }
        dispatch(searchWork(nameSearch))
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
            {searchJob.length === 0 ? <Table
                rowKey={(data) => data.id}
                columns={columns}
                dataSource={data}
                bordered
            /> :
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead className="border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium  px-6 py-4 ">
                                                ID
                                            </th>
                                            <th scope="col" className="text-sm font-medium  px-6 py-4 ">
                                                Job Name
                                            </th>
                                            <th scope="col" className="text-sm font-medium  px-6 py-4 ">
                                                JobType Code
                                            </th>
                                            <th scope="col" className="text-sm font-medium  px-6 py-4 ">
                                                Rate (*****)
                                            </th>
                                            <th scope="col" className="text-sm font-medium  px-6 py-4 ">
                                                Price ($)
                                            </th>
                                            <th scope="col" className="text-sm font-medium  px-6 py-4 ">
                                                Number of reviews
                                            </th>
                                            <th scope="col" className="text-sm font-medium  px-6 py-4 ">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {searchJob?.map(item => {
                                            return <tr className="border-b" key={item.id}>

                                                <td className="text-sm  text-center py-4">
                                                    {item.id}
                                                </td>
                                                <td className="text-sm  text-left pl-6 py-4 ">
                                                    {item.congViec.tenCongViec}
                                                </td>
                                                <td className="text-sm  text-center py-4 ">
                                                    {item.congViec.maChiTietLoaiCongViec}
                                                </td>
                                                <td className="text-sm  text-center py-4 ">
                                                    {item.congViec.saoCongViec}
                                                </td>
                                                <td className="text-sm  text-center py-4 ">
                                                    {item.congViec.giaTien}
                                                </td>
                                                <td className="text-sm  text-center py-4 ">
                                                    {item.congViec.danhGia}
                                                </td>
                                                <td className="text-sm  text-center py-4 ">
                                                    <React.Fragment key={Date.now()}>
                                                        <button
                                                            onClick={() => {

                                                                localStorage.setItem("jobEdit", JSON.stringify(item.congViec));
                                                                showModalEditJob();

                                                            }}

                                                            title="chỉnh sửa"
                                                            className="text-2xl text-blue-500"
                                                        >
                                                            <EditOutlined />
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                dispatch(deleteWork(item.id))
                                                                console.log(data);
                                                            }}
                                                            title="Xoá"
                                                            className="ml-3 text-2xl text-red-400"
                                                        >
                                                            <DeleteOutlined />
                                                        </button>
                                                    </React.Fragment>
                                                </td>

                                            </tr>
                                        })}


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            }
            <div>
                <Modal
                    open={isModalOpenAddJob}
                    onOk={handleOkAddJob}
                    onCancel={handleCancelAddJob}
                    footer={null}
                    width="600px"
                >
                    <PostWork />
                </Modal>
            </div>
            <div>
                <Modal
                    open={isModalOpenEditJob}
                    onOk={handleOkEditJob}
                    onCancel={handleCancelEditJob}
                    footer={null}
                    width="600px"
                >
                    <EditJob />
                </Modal>
            </div>
        </>
    );
};
export default JobManagement;
