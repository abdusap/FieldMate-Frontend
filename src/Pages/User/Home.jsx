import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import decodeAuthToken from '../../Authentication/DecodeAuthToken'
import getAuthToken from '../../Authentication/GetAuthToken'
import HomeCarousel from '../../Components/Users/HomeCarousel'
import HomeSectionMeet from '../../Components/Users/HomeSection'
import HomeSectionProperty from '../../Components/Users/HomeServices'
// import Navbar from '../../../Components/Users/Navbar/Navbar'


function Home() {
   const navigate=useNavigate()
  // useEffect(()=>{
  //   const token=getAuthToken()
  //   console.log(token)
  //   if(token){
  //     const data=decodeAuthToken()
  //     console.log(data)
  //   }
    // else(
    //  navigate('/login')
    // )
  // },[])
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