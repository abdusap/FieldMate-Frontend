import React, { useEffect, useState } from 'react'
import { getLocationAndSportsApi } from '../../Helpers/UserApi'

function FilterForm() {
  const [sports,setSports]=useState([])
  const [location,setLocation]=useState([])
  const [locationId, setLocationId] = useState('');
  const [sportsId, setSportsId] = useState('');
  useEffect(()=>{
    getLocationAndSportsApi().then((res)=>{
      setSports(res.data.sports)
      setLocation(res.data.location)
    })
  },[])

  const handleLocationChange = (event) => {
    setLocationId(event.target.value);
  }

  const handleSportsChange = (event) => {
    setSportsId(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(locationId);
    console.log(sportsId);
    // Do something with the selected locationId and sportsId
  }
  return (
    <>
    <div className=' bg-white w-fit h-fit pl-5 self-center md:self-start px-20 my-6 md:ml-9'>
      <form onSubmit={handleSubmit}>
    <div>
  <p className='font-semibold mt-3'>Location</p>
  <ul>
    {location.map((location)=>(
      <li className='mt-1'>
      <input type="radio" id="location1" value={location._id} name="location" className='mr-1' onChange={handleLocationChange} checked={locationId === location._id}/>
      <label for="location1">{location.name}</label>
    </li>
        ))
    }
  </ul>
</div>

<div>
  <p className='font-semibold mt-2'>Sports</p>
  <ul>
    {sports.map((sports)=>(
      <li className='mt-1'>
      <input type="radio" id="sports1" name="sports" value={sports._id} className='mr-1' onChange={handleSportsChange} checked={sportsId === sports._id}/>
      <label for="sports1">{sports.name}</label>
    </li>
      ))}

  </ul>
</div>

<button className='w-fit h-fit bg-blue-600 text-white px-1 rounded-md mb-3 mt-2'>Submit</button>
</form>
        </div>
    </>
  )
}

export default FilterForm