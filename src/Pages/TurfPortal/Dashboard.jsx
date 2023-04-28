import React from 'react'
import Cards from '../../Components/TurfPortal/Cards'
import Graph from '../../Components/TurfPortal/Graph'
import { useSelector } from 'react-redux'


function Dashboard() {
  const id = useSelector((state) =>  state.turf);
  console.log(useSelector((state) =>  state.turf))
  return (
    <>

    <h1 className="font-bold text-xl md:text-2xl">Dashboard</h1>
    <div className='flex md:flex-row justify-around mt-2 md:mt-8 flex-col'>
      <Cards colour={'bg-blue-900'} head={'Current Booking'} body={'112'}/>
      <Cards colour={' bg-yellow-600'} head={'Total Booking'} body={'312'}/>
      <Cards colour={' bg-green-600'} head={'Total Revenue'} body={'Rs 11,000'}/>
    </div>
    <Graph/>
    </>
  )
}

export default Dashboard