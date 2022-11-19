import React from 'react'
import { Carousel } from 'antd';
import { Rate } from 'antd';
import './home.css'
const contentStyle = {
    height: '70vh',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
};
const HomeCarousel = () => {
    return (
        <div className='home-carousel w-full' >
            <Carousel effect="fade" >
                <div >
                    <div style={{ ...contentStyle, backgroundImage: `url('https://tse1.mm.bing.net/th?id=OIP.xl6aPdf_YteEhSyOA59bpAHaHg&pid=Api&P=0')` }}>
                        {/* <img classname="w-full opacity-0" src="https://4.bp.blogspot.com/-7U76lq3CTBU/Um6PsxXB7ZI/AAAAAAAAAM0/MsS2QUoL-kY/s1600/hoa-dep-nhat-09.jpg" alt='' style={{ height: '70vh' }} /> */}
                        <div className="container content py-20">
                            <div>
                                <h1 className='text-white text-5xl text-left '>Find the perfect <i>freelance</i>
                                    <br /> services for your business</h1>
                                <form className=" space-y-1 dark:text-gray-100">

                                    <div className="flex">
                                        <input type="text" className='rounded-sm pr-60 pl-3 py-2 text-pink-600' placeholder='Try "building mobile app"' />
                                        <button className="flex items-center px-5 pointer-events-none sm:text-sm rounded-sm bg-green-700 ">Search</button>
                                    </div>
                                </form>
                                <div className='flex pt-8'>
                                    <h2 className=' text-white  font-bold' style={{ fontSize: '17px' }}> Popular : </h2>
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
                                        <Rate disabled defaultValue={2} />
                                    </div>
                                    <i className='text-white text-2xl pr-16'>
                                        zack.</i>
                             

                            </div>

                        </div>

                    </div>

                </div>
            </Carousel>

        </div>
    )
}

export default HomeCarousel