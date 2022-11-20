import React from 'react'
import HomeCarousel from './HomeCarousel'
import HomeLogo from './HomeLogo'
import HomeService from './HomeService'
import HomeServiceDetail from './HomeServiceDetail'

const Home = () => {
  return (
    <div>
        <HomeCarousel/>
        <HomeLogo/>
        <HomeService/>
        <HomeServiceDetail/>
    </div>
  )
}

export default Home