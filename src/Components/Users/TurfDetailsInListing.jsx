import React from 'react'

function TurfDetailsInListing({imageUrl,turfName,location,sports,rating,offers}) {
  return (
    <>
       <div className='flex border  bg-white border-black mt-5 p-3'>
        <div className='w-36 h-36 bg-slate-700 ' style={{"backgroundImage":'url'}}>
        fdf
        </div>
        <div  className='pl-3'>
         <p className='font-semibold text-lg'>beach arena</p>
         <p className='flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
Calicut</p>
<p>Rating:</p>
<p>Football,Cricket</p>
<p>Offers:30%</p>
        </div>
      </div>
    </>
  )
}

export default TurfDetailsInListing