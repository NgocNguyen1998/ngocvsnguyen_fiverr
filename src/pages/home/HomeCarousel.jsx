import React from 'react'
import { Carousel } from 'antd';
import { Rate } from 'antd';
import './home.css'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const contentStyle = {
    height: '86vh',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
};
const HomeCarousel = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
    } = useForm({
        mode: "onBlur",
        defaultValues: {},
    });
    return (
        <div className='home-carousel w-full overflow-hidden' >
            <Carousel effect="fade" autoplay>
                <div >
                    <div style={{ ...contentStyle, backgroundImage: `url('https://tse1.mm.bing.net/th?id=OIP.xl6aPdf_YteEhSyOA59bpAHaHg&pid=Api&P=0')` }}>
                        {/* <img classname="w-full opacity-0" src="https://4.bp.blogspot.com/-7U76lq3CTBU/Um6PsxXB7ZI/AAAAAAAAAM0/MsS2QUoL-kY/s1600/hoa-dep-nhat-09.jpg" alt='' style={{ height: '70vh' }} /> */}
                        <div className="container content py-20">
                            <div className='pb-14'>
                                <h1 className='text-white text-6xl text-left '>Find the perfect <i>freelance</i>
                                    <br /> services for your business</h1>
                                <form className=" space-y-1 dark:text-gray-100" onSubmit={handleSubmit((data) => {
                                    navigate(`/jobList/${data.jobname}`)

                                })}>
                                    <div className="flex">
                                        <input type="text" className='rounded-sm pr-96 pl-3 py-3 text-pink-600' placeholder='Try "building mobile app"' {...register("jobname")} />
                                        <button type='submit' className="flex items-center px-7  sm:text-sm rounded-sm bg-green-700 " onSubmit={handleSubmit((data) => {
                                    navigate(`/jobList/${data.jobname}`)
                                })}>Search</button>
                                    </div>
                                </form>
                                <div className='flex pt-8'>
                                    <h2 className=' text-white  font-bold' style={{ fontSize: '20px' }}> Popular : </h2>
                                    <div className='pl-2 popular'>
                                        <a href="" >Website</a>
                                        <a href="" >Wordpress</a>
                                        <a href="" >Logo Design</a>
                                        <a href="" >Dropshipping</a>
                                    </div>
                                </div>
                            </div>
                            <div className='text-right'>

                                <div>
                                    <Rate disabled defaultValue={5} style={{ fontSize: '15px' }} />
                                </div>
                                <i className='text-white'>
                                    Zack,Bar Owner.</i>


                            </div>

                        </div>

                    </div>

                </div>
                <div >
                    <div style={{ ...contentStyle, backgroundImage: `url('https://tse1.mm.bing.net/th?id=OIP.xl6aPdf_YteEhSyOA59bpAHaHg&pid=Api&P=0')` }}>
                        {/* <img classname="w-full opacity-0" src="https://4.bp.blogspot.com/-7U76lq3CTBU/Um6PsxXB7ZI/AAAAAAAAAM0/MsS2QUoL-kY/s1600/hoa-dep-nhat-09.jpg" alt='' style={{ height: '70vh' }} /> */}
                        <div className="container content py-20">
                            <div className='pb-14'>
                                <h1 className='text-white text-6xl text-left '>Find the perfect <i>freelance</i>
                                    <br /> services for your business</h1>
                                <form className=" space-y-1 dark:text-gray-100">

                                    <div className="flex">
                                        <input type="text" className='rounded-sm pr-96 pl-3 py-3 text-pink-600' placeholder='Try "building mobile app"' />
                                        <button className="flex items-center px-7 pointer-events-none sm:text-sm rounded-sm bg-green-700 ">Search</button>
                                    </div>
                                </form>
                                <div className='flex pt-8'>
                                    <h2 className=' text-white  font-bold' style={{ fontSize: '20px' }}> Popular : </h2>
                                    <div className='pl-2 popular'>
                                        <a href="" >Website</a>
                                        <a href="" >Wordpress</a>
                                        <a href="" >Logo Design</a>
                                        <a href="" >Dropshipping</a>
                                    </div>
                                </div>
                            </div>
                            <div className='text-right'>

                                <div>
                                    <Rate disabled defaultValue={3} style={{ fontSize: '15px' }} />
                                </div>
                                <i className='text-white'>
                                    Ritika,Shoemaker and Designer.</i>


                            </div>

                        </div>

                    </div>

                </div>
                <div >
                    <div style={{ ...contentStyle, backgroundImage: `url('https://tse1.mm.bing.net/th?id=OIP.xl6aPdf_YteEhSyOA59bpAHaHg&pid=Api&P=0')` }}>
                        {/* <img classname="w-full opacity-0" src="https://4.bp.blogspot.com/-7U76lq3CTBU/Um6PsxXB7ZI/AAAAAAAAAM0/MsS2QUoL-kY/s1600/hoa-dep-nhat-09.jpg" alt='' style={{ height: '70vh' }} /> */}
                        <div className="container content py-20">
                            <div className='pb-14'>
                                <h1 className='text-white text-6xl text-left '>Find the perfect <i>freelance</i>
                                    <br /> services for your business</h1>
                                <form className=" space-y-1 dark:text-gray-100">

                                    <div className="flex">
                                        <input type="text" className='rounded-sm pr-96 pl-3 py-3 text-pink-600' placeholder='Try "building mobile app"' />
                                        <button className="flex items-center px-7 pointer-events-none sm:text-sm rounded-sm bg-green-700 ">Search</button>
                                    </div>
                                </form>
                                <div className='flex pt-8'>
                                    <h2 className=' text-white  font-bold' style={{ fontSize: '20px' }}> Popular : </h2>
                                    <div className='pl-2 popular'>
                                        <a href="" >Website</a>
                                        <a href="" >Wordpress</a>
                                        <a href="" >Logo Design</a>
                                        <a href="" >Dropshipping</a>
                                    </div>
                                </div>
                            </div>
                            <div className='text-right'>

                                <div>
                                    <Rate disabled defaultValue={4} style={{ fontSize: '15px' }} />
                                </div>
                                <i className='text-white '>
                                    Gabrielle,Video Editor</i>


                            </div>

                        </div>

                    </div>

                </div>
            </Carousel>

        </div>
    )
}

export default HomeCarousel