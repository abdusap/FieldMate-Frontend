import React from 'react'
import { useNavigate } from 'react-router-dom'

function TurfDetailsInListing({imageUrl,turfName,location,sports,rating,offers,handleClick,id}) {
  const navigate=useNavigate()
  return (
    <>
       <div className='flex border  bg-white border-black mt-5 p-3 cursor-pointer' onClick={()=>navigate('/turf_details',{state:id})}>
        <div className='w-36 h-36 bg-slate-700 bg-cover' style={{"backgroundImage":`url(${imageUrl})`}}>
        
        </div>
        <div  className='pl-3'>
         <p className='font-semibold text-lg'>{turfName}</p>
         <p className='flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
{location}</p>
<span>
  {sports?.map((data,i) =>{
  if(i===sports.length-1){
    return <span>{data}.</span>
  }else{
    return <span>{data},</span>
  }
})}
</span>
{/* {sports?.map((data)=><p>{data}</p>)} */}
<p>Rating:</p>
{/* <p>{sports}</p> */}
<p>Offers:30%</p>
        </div>
      </div>
    </>
  )
}

export default TurfDetailsInListing