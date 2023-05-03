import React, { useEffect,useState } from 'react'
import ReviewsBox from './ReviewsBox'
import { useLocation, useNavigate } from 'react-router-dom'
import { turfDetailsApi } from '../../Helpers/UserApi';



function TurfDetailsContainer() {
  const navigate=useNavigate()
  const [amenities,setAmenities]=useState([])
  const [image,setImage]=useState([])
  const [rules,setRules]=useState([])
  const [sports,setSports]=useState([])
  const [turf,setTurf]=useState({})
  const [turfDetails,setTurfDetails]=useState({})
  const location=useLocation()
  console.log(location.state);
  useEffect(()=>{
    turfDetailsApi(location.state).then((res)=>{
      console.log(res);
      setAmenities(res.data.turfDetails.amenities)
      setRules(res.data.turfDetails.rules)
      setImage(res.data.turfDetails.image)
      setSports(res.data.turfDetails.sports)
      setTurfDetails(res.data.turfDetails)
      setTurf(res.data.turf)
    })
  },[])
  return (
    <>
     <div>
        
        <div className='w-full  bg-white border-t-2 pl-8 border-b-2'>
          <p className='text-lg font-bold p-1'>{turfDetails.groundName}</p>
          <p className='flex pb-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
{turf.location}</p>
        </div>
        <div className='flex bg-white w-11/12 mx-auto p-4 rounded-lg mt-4 '>
          {image.map((url)=>
          <div className='h-64 w-80 ml-3 bg-cover' style={{backgroundImage:`url(${url})`}}/>
          )

          }
                
            

        </div>
        <div className='w-full flex justify-evenly flex-col md:flex-row mt-4 px-4  md:px-3 items-center md:items-stretch'>
          <div className='bg-white md:w-96 p-4 mb-4 rounded-lg w-full'>
            <p className='text-base font-bold pb-2'>Available Sports</p>
            {sports.map((sports)=>
              <span className='text-sm border border-black px-1 rounded-2xl mr-1'>{sports}</span>
            )

            }
          
            
            <p className='text-base font-bold mt-2'>Amenities</p>
           <ul className='list-disc ml-6'>
           {amenities.map((data)=>
           <li>{data}</li>
           )

           }
           
           </ul>
          </div>
          <div className='bg-white md:w-96 p-4 mb-4 rounded-lg w-full'>
          <p className='text-base font-bold pb-1'>Slot Booking</p>
          <button className='text-white bg-black px-3 rounded-lg ml-3' onClick={()=>navigate('/slot_details',{state:turf._id})}>Slots</button>
          {/* <p className='text-base font-bold mt-1 mb-1'>Tournaments</p> */}
           {/* <p className='mb-1 text-sm border-black border  w-fit p-1 rounded-xl'>Football Tournament on 12/04/2023</p> */}
          {/* <p className='text-base font-bold'>Offers</p> */}
          
           {/* <p className='w-fit p-1 rounded-xl flex text-gray-500'>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

            Flat 30% off</p> */}
            <p className='text-base font-bold mb-1'>Venue Rules</p>
            <ul className='list-disc ml-6'>
           {rules.map((data)=>
           <li>{data}</li>
           )}
           
          </ul>
          </div>
          <div className='bg-white md:w-96 p-4 mb-4 rounded-lg w-full'>
          <p className='text-base font-bold'>Location and Contact</p>

<a className='flex mt-2 ' href={turf.gioCoordinates}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-1 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>Location
</a>
<a href="www.beacharena.com" className='flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-1 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
</svg>{turfDetails.website}
</a>
<p className='flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-1 w-6 h-6">
  <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
</svg>{turf.email}
 </p>
 <p className='flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-1 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>+91 {turf.mobile}
</p>
          </div>
          
        </div>
        <div className='bg-white  md:w-1/2 md:ml-20 mx-4 md:mx-0 mt-6 rounded-md'>
       <div className='flex justify-between border-b border-black mx-4 p-3 '>
        <p className='text-lg font-bold'>Reviews</p>
        <button className='text-white bg-black px-3 rounded-lg'>Write a reviews</button>
       </div>
       {/* <div className='p-3'>
        <p>Ground Rating</p>
        
<div class="flex items-center mb-3">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">4.95 out of 5</p>
</div>
<p className="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
<div class="flex items-center mt-4">
    <span class="text-sm font-medium text-blue-600 dark:text-blue-500">5 star</span>
    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-400 rounded" style={{"width": "70%"}}></div>
    </div>
    <span class="text-sm font-medium text-blue-600 dark:text-blue-500" >70%</span>
</div>
<div st class="flex items-center mt-4">
    <span class="text-sm font-medium text-blue-600 dark:text-blue-500">4 star</span>
    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-400 rounded" style={{"width": "17%"}}></div>
    </div>
    <span class="text-sm font-medium text-blue-600 dark:text-blue-500">17%</span>
</div>
<div class="flex items-center mt-4">
    <span class="text-sm font-medium text-blue-600 dark:text-blue-500">3 star</span>
    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-400 rounded" style={{"width": "8%"}}></div>
    </div>
    <span class="text-sm font-medium text-blue-600 dark:text-blue-500">8%</span>
</div>
<div class="flex items-center mt-4">
    <span class="text-sm font-medium text-blue-600 dark:text-blue-500">2 star</span>
    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-400 rounded" style={{"width": "4%"}}></div>
    </div>
    <span class="text-sm font-medium text-blue-600 dark:text-blue-500">4%</span>
</div>
<div class="flex items-center mt-4">
    <span class="text-sm font-medium text-blue-600 dark:text-blue-500">1 star</span>
    <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div class="h-5 bg-yellow-400 rounded" style={{"width": "1%"}}></div>
    </div>
    <span class="text-sm font-medium text-blue-600 dark:text-blue-500">1%</span>
</div>   

       </div> */}
       <div className='px-4'>

       <ReviewsBox/>
       <ReviewsBox/>
       <ReviewsBox/>
       <ReviewsBox/>
   
      
     

       </div>
        </div>
     </div>
    </>
  )
}

export default TurfDetailsContainer