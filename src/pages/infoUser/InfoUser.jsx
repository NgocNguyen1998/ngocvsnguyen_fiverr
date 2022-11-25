import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Rate, Modal } from 'antd';
import './infouser.css';
import { useNguoiDung, getInfoUser } from '../../storeToolKit/NguoiDung';
import { deleteRentList, getRentList, useThueCongViec } from '../../storeToolKit/ThueCongViec';
import { useState } from 'react';
import EditInfo from './EditInfo';
const InfoUser = () => {
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const { infoUser } = useNguoiDung();
    const { rentList } = useThueCongViec();
    console.log("rentList: ", rentList);
    console.log("infoUser: ", infoUser);
    const [isModalOpenRegister, setIsModalOpenRegister] = useState(false);
    const showModalRegister = () => {
        setIsModalOpenRegister(true);
    };
    const handleOkRegister = () => {
        setIsModalOpenRegister(false);
    };
    const handleCancelRegister = () => {
        setIsModalOpenRegister(false);
    };
    useEffect(() => {
        const inputcheck = document.body.querySelector(".inputcheck");
        const backgroundcheck = document.body.querySelector(".backgroundcheck");
        const subcheck = document.body.querySelector(".subcheck");
        inputcheck.style.display = "block";
        subcheck.style.display = "block";
        backgroundcheck.style.backgroundColor = "white";
    });
    useEffect(() => {
        dispatch(getInfoUser(params.idUser));
        dispatch(getRentList())
    }, [params.idUser])
    return (
        <div className='pt-12 info-user bg-pink-50'>
            <div className='grid lg:grid-cols-3 container gap-x-9 pb-10'>
                <div className='col-span-1 ml-8'>
                    <div className='top '>
                        <div className=" max-w-lg p-6 space-y-4 overflow-hidden rounded-lg shadow-md bg-white " >
                            <div className="text-center">
                                <span className='text-green-500 online '>Online</span>

                            </div>
                            <div className='pt-6 flex flex-col content-center items-center'>
                                <img src={!infoUser.avatar ? "https://wiki-travel.com.vn/uploads/post/thanhhuong-164523114546-hoa-dao.jpg" : infoUser.avatar} alt='...' className="object-cover   rounded-full " style={{ height: '200px', width: '200px' }} />
                                <p className='pt-6 text-black font-medium text-2xl mb-1'>{infoUser.name}</p>
                                <button onClick={() => {
                                    showModalRegister();
                                }} className='cursor-pointer hover:text-green-400'> <i class="fa-solid fa-pencil"></i></button>
                                <div>
                                    <Modal
                                        open={isModalOpenRegister}
                                        onOk={handleOkRegister}
                                        onCancel={handleCancelRegister}
                                        footer={null}
                                        width="600px"
                                    >
                                        <EditInfo params = {params.idUser}/>
                                    </Modal>
                                </div>
                            </div>
                            <hr />
                            <div className="flex flex-wrap justify-between content-center items-center ">
                                <div className="space-x-2 text-xl text-gray-400">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <span style={{ fontSize: '17px' }} className='font-medium'>From</span>
                                </div>
                                <div className=" text-sm ">
                                    <span className='font-bold' style={{ fontSize: '17px' }}>Viet Nam</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-between content-center items-center">
                                <div className="space-x-2 text-xl text-gray-400">
                                    <i class="fa-solid fa-cake-candles"></i>
                                    <span style={{ fontSize: '17px' }} className='font-medium'>Birthday</span>
                                </div>
                                <div className=" text-sm ">
                                    <span className='font-bold' style={{ fontSize: '17px' }}>{infoUser.birthday}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bottom pt-9'>
                        <div className=" max-w-lg p-6 space-y-8 overflow-hidden rounded-lg shadow-md bg-white " >
                            <div className="flex flex-wrap justify-between content-center items-center ">
                                <div className="space-x-2 text-xl text-gray-400">
                                    <span style={{ fontSize: '19px' }} className=' text-black font-bold'>Description</span>
                                </div>
                                <div className=" text-sm ">
                                    <span className='font-medium cursor-pointer' style={{ fontSize: '16px', color: '#00698c' }}>Edit Description</span>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <div className="flex flex-wrap justify-between content-center items-center ">
                                    <div className="space-x-2 text-xl text-gray-400">
                                        <span style={{ fontSize: '19px' }} className=' text-black font-bold'>Languages</span>

                                    </div>
                                    <div className=" text-sm ">
                                        <span className='font-medium cursor-pointer' style={{ fontSize: '16px', color: '#00698c' }}>Add New</span>
                                    </div>
                                </div>
                                <p>
                                    <span>English - <i style={{ color: '#b2b2b2' }}>Basic</i></span>
                                    <span> <i class="fa-solid fa-pencil"></i> </span>
                                </p>
                            </div>
                            <hr />
                            <div className='flex flex-col items-start'>
                                <h2 style={{ fontSize: '19px' }} className=' text-black font-bold'>Linked Accounts</h2>
                                <p style={{ color: '#00698c' }}>
                                    <span className='font-bold text-2xl pr-2'>+</span>
                                    <span style={{ fontSize: '17px' }} >Facebook</span>
                                </p>
                                <p style={{ color: '#00698c' }}>
                                    <span className='font-bold text-2xl pr-2'>+</span>
                                    <span style={{ fontSize: '17px' }} >Google</span>
                                </p>
                                <p style={{ color: '#00698c' }}>
                                    <span className='font-bold text-2xl pr-2'>+</span>
                                    <span style={{ fontSize: '17px' }} >Dribbble</span>
                                </p>
                                <p style={{ color: '#00698c' }}>
                                    <span className='font-bold text-2xl pr-2'>+</span>
                                    <span style={{ fontSize: '17px' }} >Stack Overflow</span>
                                </p>
                                <p style={{ color: '#00698c' }}>
                                    <span className='font-bold text-2xl pr-2'>+</span>
                                    <span style={{ fontSize: '17px' }} >GitHub</span>
                                </p>
                                <p style={{ color: '#00698c' }}>
                                    <span className='font-bold text-2xl pr-2'>+</span>
                                    <span style={{ fontSize: '17px' }} >Vimeo</span>
                                </p>
                                <p style={{ color: '#00698c' }}>
                                    <span className='font-bold text-2xl pr-2'>+</span>
                                    <span style={{ fontSize: '17px' }} >Twitter</span>
                                </p>
                            </div>
                            <hr />
                            <div>
                                <div className="flex flex-wrap justify-between content-center items-center ">
                                    <div className="space-x-2 text-xl text-gray-400">
                                        <span style={{ fontSize: '19px' }} className=' text-black font-bold'>Skills</span>

                                    </div>
                                    <div className=" text-sm ">
                                        <span className='font-medium cursor-pointer' style={{ fontSize: '16px', color: '#00698c' }}>Add New</span>
                                    </div>
                                </div>
                                {infoUser.skill ? <p>
                                    {infoUser.skill.map(skill => {
                                        return <span style={{ color: '#b2b2b2' }}>{skill}, </span>
                                    })}
                                </p> : <p><span style={{ color: '#b2b2b2' }}>Add your Skills.</span></p>}
                            </div>
                            <hr />
                            <div>
                                <div className="flex flex-wrap justify-between content-center items-center ">
                                    <div className="space-x-2 text-xl text-gray-400">
                                        <span style={{ fontSize: '19px' }} className=' text-black font-bold'>Education</span>

                                    </div>
                                    <div className=" text-sm ">
                                        <span className='font-medium cursor-pointer' style={{ fontSize: '16px', color: '#00698c' }}>Add New</span>
                                    </div>
                                </div>
                                <p>
                                    <span style={{ color: '#b2b2b2' }}>Add your Education.</span>
                                </p>
                            </div>
                            <hr />
                            <div>
                                <div className="flex flex-wrap justify-between content-center items-center ">
                                    <div className="space-x-2 text-xl text-gray-400">
                                        <span style={{ fontSize: '19px' }} className=' text-black font-bold'>Certification</span>

                                    </div>
                                    <div className=" text-sm ">
                                        <span className='font-medium cursor-pointer' style={{ fontSize: '16px', color: '#00698c' }}>Add New</span>
                                    </div>
                                </div>
                                <p>
                                    <span style={{ color: '#b2b2b2' }}>Add your Certification.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 ml-10 mr-8'>
                    <div className="relative  rounded-md shadow-md sm:py-6 sm:px-8 bg-white ">
                        <button className="absolute top-2 right-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313" />
                            </svg>
                        </button>
                        <div className='flex items-center '>
                            <div className='text-4xl pr-2 '>
                                <i class="fa-solid fa-building pb-4"></i>
                            </div>
                            <div>
                                <p className='mb-0'> <b>Buying services for work?</b> Help us tallor your experience to fit your needs.</p>
                                <p className='text-green-500 pt-2'>Tell us more about your business </p>
                            </div>
                        </div>

                    </div>
                    <div className="flex items-center justify-between rounded-md shadow-md sm:py-6 sm:px-8 bg-white my-4">
                        <h2 className=" font-semibold leading-tight tracking-wide text-gray-500">It seems that you don't have any active Gigs. Get selling!</h2>
                        <button className="px-6 py-2 rounded-sm shadow-sm dark:bg-green-400 dark:text-gray-900">Create a New Gig</button>
                    </div>
                    <div className='work  bg-white  px-4  pb-2'>
                        {rentList.map((job, index) => {
                            return <div className='border-t-2 border-black pb-2' key={index}>
                                <div className='grid grid-cols-4 gap-x-3 items-center pt-2'>
                                    <div className='col-span-1'>
                                        <img src={job.congViec.hinhAnh} alt=".." className='rounded-lg w-full' style={{ height: '160px' }} />
                                    </div>
                                    <div className='col-span-3'>

                                        <div>
                                            <h1 className='text-xl mb-0 pb-1'>{job.congViec.tenCongViec} </h1>
                                            <p className='mb-0 pb-1'><span className='font-medium '>Rent date :</span> {job.ngayThue}</p>
                                            <p className='mb-0 pb-1'>{job.congViec.moTaNgan} </p>
                                            <p className='mb-0'><Rate disabled defaultValue={job.congViec.saoCongViec} style={{ fontSize: '15px' }} /></p>
                                        </div>

                                    </div>
                                </div>
                                <div className=' flex justify-end pb-2'>
                                    <button className='border-2  py-1 px-4 rounded-md border-pink-400 hover:text-white hover:bg-pink-300 transition-all duration-300 mr-4' onClick={() => navigate(`/jobDetail/${job.congViec.id}`)}>View detail</button>
                                    {/* <button className='border-2 py-1 px-4 rounded-md border-pink-400 hover:text-white hover:bg-pink-300 transition-all duration-300 mx-4'>Edit</button> */}
                                    <button className='border-2 py-1 px-4 text-red-500 font-medium rounded-md border-pink-400 hover:bg-pink-300 transition-all duration-300' onClick={() => {
                                        dispatch(deleteRentList(job.id))

                                    }}>X</button>
                                </div>
                            </div>
                        })}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default InfoUser