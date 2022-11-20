import React from 'react'
import HomeCarousel from './HomeCarousel'
import HomeLogo from './HomeLogo'
import HomeService from './HomeService'
import HomeServiceDetail from './HomeServiceDetail'
import HomeSlickItem from './HomeSlickItem'

const Home = () => {
  return (
    <div>
        <HomeCarousel/>
        <HomeLogo/>
        <HomeService/>
        <HomeServiceDetail/>
        <HomeSlickItem/>
    </div>
  )
}

export default Home