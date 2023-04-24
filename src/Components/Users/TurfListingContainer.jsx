import React from 'react'
import TurfDetailsInListing from './TurfDetailsInListing'
import FilterForm from './FilterForm'



function TurfListingContainer() {
  return (
    <>
      <div className='flex md:flex-row  flex-col'>
    <FilterForm/>
        <div className='flex-grow mt- mx-10 px-3  flex-col'>
        <TurfDetailsInListing/>
        <TurfDetailsInListing/>
        <TurfDetailsInListing/>
        <TurfDetailsInListing/>
 
        </div>
    </div>
    </>
  )
}

export default TurfListingContainer