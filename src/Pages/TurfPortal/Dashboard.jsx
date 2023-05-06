import React, { useEffect, useState } from 'react'
import Cards from '../../Components/TurfPortal/Cards'
import Graph from '../../Components/TurfPortal/Graph'
import { useSelector } from 'react-redux'
import { dashboardDetailsApi } from '../../Helpers/TurfApi,';


function Dashboard() {
  const {id} = useSelector((state) =>  state.turf);
  const [reviewCount,setReviewCount]=useState(0)
  const [totalRevenue,setTotalRevenue]=useState(0)
  const [currentBooking,setCurrentBooking]=useState(0)
  const [totalBooking,setTotalBooking]=useState(0)
  const [cancelledBooking,setCancelledBooking]=useState(0)
  useEffect(()=>{
    dashboardDetailsApi(id).then((res)=>{
      setReviewCount(res.data.reviewCount)
      const slotBooking=res.data.slotBooking
      setTotalBooking(slotBooking.length)
      slotBooking.forEach((data)=>{
        if(data.status){
          setTotalRevenue(totalRevenue+data.total)
          const date = new Date(data.date)
          if (date.getTime() > Date.now()) {
            setCurrentBooking(currentBooking+1)
          }


        }else{
          setCancelledBooking(cancelledBooking+1)
        }
        
      })
    })
  },[])
  return (
    <>

    <h1 className="font-bold text-xl md:text-2xl">Dashboard</h1>
    <div className='flex md:flex-row justify-around mt-2 md:mt-8 flex-col'>
      <Cards colour={'bg-blue-900'} head={'Current Booking'} body={currentBooking}/>
      <Cards colour={' bg-yellow-600'} head={'Total Booking'} body={totalBooking}/>
      <Cards colour={' bg-green-600'} head={'Total Revenue'} body={`Rs: ${totalRevenue}`}/>
    </div>
    <Graph label1={"Cancelled Booking"} label2={"Total Review"} label3={"Total Booking"} label4={"Current Booking"} data1={cancelledBooking} data2={reviewCount} data3={totalBooking} data4={currentBooking}/>
    </>
  )
}

export default Dashboard