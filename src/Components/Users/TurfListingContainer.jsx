import React, { useContext, useEffect, useState } from 'react'
import TurfDetailsInListing from './TurfDetailsInListing'
import FilterForm from './FilterForm'
import { getAllTurfApi } from '../../Helpers/UserApi'
import { SearchContext } from '../../Context/SearchContext'
import { useLocation } from 'react-router-dom'



function TurfListingContainer() {
  const filteredSports=useLocation((state)=>state)
  const [turf,setTurf]=useState([])
  const {search,setSearch}=useContext(SearchContext)
  const [location,setLocation]=useState('')
  const [sports,setSports]=useState('')
  useEffect(()=>{
    // if(filteredSports.state!==""){
    //   setSports(filteredSports.state)    
    // }
    getAllTurfApi(search,sports,location).then((res)=>{
     setTurf(res.data.turfs)
    })
  },[search,location,sports])

  const handleFilter=(e)=>{
    e.preventDefault()
  }
  return (
    <>
      <div className='flex md:flex-row  flex-col'>
    <FilterForm locationId={location} setLocationId={setLocation} sportsId={sports} setSportsId={setSports} handleSubmit={handleFilter}/>
        <div className='flex-grow mt- mx-10 px-3  flex-col'>
          {
            turf.map((data)=>{
              return <TurfDetailsInListing on imageUrl={data.image[0]} turfName={data.groundName} location={data.location} sports={data.sports}
              //  handleClick={handleClick(data.turfId)} 
               id={data.turfId}/>
            }
            )
          }
        

 
        </div>
    </div>
    </>
  )
}

export default TurfListingContainer