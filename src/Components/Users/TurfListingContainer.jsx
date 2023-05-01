import React, { useEffect, useState } from 'react'
import TurfDetailsInListing from './TurfDetailsInListing'
import FilterForm from './FilterForm'
import { getAllTurfApi } from '../../Helpers/UserApi'



function TurfListingContainer() {
  const [turf,setTurf]=useState([])
  useEffect(()=>{
    getAllTurfApi().then((res)=>{
     console.log(res.data.turfs);
     setTurf(res.data.turfs)
    })
  },[])
  const handleClick=(id)=>{
console.log(id);
  }
  return (
    <>
      <div className='flex md:flex-row  flex-col'>
    <FilterForm/>
        <div className='flex-grow mt- mx-10 px-3  flex-col'>
          {
            turf.map((data)=>{
              return <TurfDetailsInListing on imageUrl={data.image[0]} turfName={data.groundName} location={data.location} sports={data.sports} handleClick={handleClick(data.turfId)} id={data.turfId}/>
            }
            )
          }
        

 
        </div>
    </div>
    </>
  )
}

export default TurfListingContainer