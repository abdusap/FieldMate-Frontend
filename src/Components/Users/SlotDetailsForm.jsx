import React, { useEffect, useState } from 'react'
import { availableLocationApi, availableSlotsApi } from '../../Helpers/UserApi';
import { useLocation, useNavigate } from 'react-router-dom';
import FilteredSlots from '../../Helpers/FilteredSlots';

function SlotDetailsForm() {
const navigate=useNavigate()
  const location=useLocation()
    const [minDate, setMinDate] = useState(new Date().toISOString().split('T')[0]);
    const [availableSports,setAvailableSports] = useState([])
    const [selectedSportsId,setSelectedSportsId]= useState('')
    const [selectedSportsName,setSelectedSportsName] = useState('') 
    const [selectedDate,setSelectedDate] = useState('')
    const [turfId,setTurfId] = useState('')
    const [slots,setSlots] = useState([])
    const [selectedSlots, setSelectedSlots] = useState([]);
   
    // const [location,setLocation] = useState([])
    useEffect(()=>{
      console.log(location.state);
      setTurfId(location.state)
      availableLocationApi(location.state).then((res)=>{
        setAvailableSports(res.data.sports)
      })
    },[])
    useEffect(()=>{
      if(selectedDate!==''&&selectedSportsId!==''){
        const SelectedDate=selectedDate
        availableSlotsApi(turfId,selectedSportsId,selectedDate).then((res)=>{
          if(res.data.allSlot){
            const resSlots=res.data.allSlots
            // FilteredSlots(resSlots).then((data)=>{
              const selectedDate = new Date(SelectedDate);
              const currentDate = new Date();
              if (selectedDate.toDateString() === currentDate.toDateString()) {
              setSlots(FilteredSlots(resSlots))
              }else{
                setSlots(resSlots)
              }
            // })

          }
          if(res.data.bookedSlot){
            const turfSlots=res.data.allSlots
            const bookedSlot=res.data.BookedSlots
            const availableSlot = turfSlots.filter(slot => !bookedSlot.includes(slot));
            const selectedDate = new Date(SelectedDate);
              const currentDate = new Date();
              if (selectedDate.toDateString() === currentDate.toDateString()) {
                setSlots(FilteredSlots(availableSlot))
                }else{
                  setSlots(availableSlot)
                }
          }
        })
        console.log(selectedSportsId)
    console.log(selectedDate)
      }
    },[selectedDate,selectedSportsId])
    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(selectedSportsId)
      console.log(selectedSlots);
      console.log(selectedSportsName);
      const data={
        turfId:turfId,
        sportsName:selectedSportsName,
        sportsId:selectedSportsId,
        date:selectedDate,
        slots:selectedSlots
      }
      navigate('/slot_checkout',{state:data})

    }

    const handleCheckboxChange = (event) => {
      const slot = event.target.value;
      const newSelectedSlots = [...selectedSlots];
  
      if (event.target.checked) {
        // Add the slot to the selectedSlots array if it is checked
        newSelectedSlots.push(slot);
      } else {
        // Remove the slot from the selectedSlots array if it is unchecked
        const index = newSelectedSlots.indexOf(slot);
        if (index > -1) {
          newSelectedSlots.splice(index, 1);
        }
      }
  
      setSelectedSlots(newSelectedSlots);
    };
    
    
  return (
    <>
         <div className='bg-white w-fit p-10 mx-auto rounded-md'>
          <p className='text-base font-semibold  text-center'>Slot Details</p>
            <form action="" onSubmit={handleSubmit}>
                <div>
                <label for="first_name" class="block mb-2 mt-3 text-sm font-medium text-gray-900 ">Select Sports</label>
                <select required name="" id=""   onChange={(e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    console.log(e);
    setSelectedSportsId(selectedOption.value);
    setSelectedSportsName(selectedOption.getAttribute('name'));
  }} 
   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full md:w-[22rem] p-2.5">
                    <option selected value={''}>Choose any Sports</option>
                    {availableSports?.map((data)=>
                    <option name={data.name} key={data.id} value={data.id}>{data.name}</option>
                    )}
                </select>
                </div>
                    <div>
            <label  for="first_name" class="block mb-2 mt-3 text-sm font-medium text-gray-900 ">Select Date</label>
            <input required onChange={(e)=>setSelectedDate(e.target.value)}   type="date" min={minDate} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full md:w-[22rem] p-2.5 mb-4" placeholder="Email" />
        </div>
     
        <div className="grid grid-cols-3 gap-4">

  {slots?.map((data,i)=>
  <div key={i}>
    <label htmlFor="slot3" className="block cursor-pointer">
      <span className="bg-green p-1">{data}</span>
      <input  type="checkbox" value={data} id="slot3" name="slot"  className=""  onChange={handleCheckboxChange}/>
    </label>
  </div>
    )}
    {/* {slots?.length===0 && selectedDate!=="" &&<p className='text-sm text-red-700'>No Available Slot</p>} */}
    {selectedDate==="" && <p className='text-sm text-blue-700'>Choose a Date</p>}
 

</div>
{/* {
  
<div
  class="inline-block ml-40  h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    class="!absolute  !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span
  >
</div>
  } */}
<div className='flex '>
    <button type='submit' className='mx-auto bg-black text-white px-2 rounded-lg py-1 mt-4'>Submit</button>
</div>

 
            </form>

        </div>
    </>
  )
}

export default SlotDetailsForm