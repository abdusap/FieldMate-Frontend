import React from 'react'
import HomeCarousel from '../../Components/Users/HomeCarousel'
import HomeSectionMeet from '../../Components/Users/HomeSection'
import HomeSectionProperty from '../../Components/Users/HomeServices'
// import Navbar from '../../../Components/Users/Navbar/Navbar'


function Home() {
  return (
    <>
    {/* <Navbar/> */}
    <HomeCarousel/>
    <HomeSectionMeet/>
    <HomeSectionProperty/>
    </>
  )
}

export default Home