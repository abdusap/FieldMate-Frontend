import React, { useState } from 'react'
import SlotBookingTable from './SlotBookingTable'
import AddSlotModal from './AddSlotModal'


function SlotManageContainer() {
  const [modal,setModal]=useState(false)
//   const HandleSubmit=(e)=>{
//     e.preventDefault()
//     const slots=[]
//     for(let i=1;i<e.target.length-1;i++){
//         if (e.target[i].value !== "") {
//             slots.push(e.target[i].value)
//         }

//     }
//     const slotPrice=e.target[0].value
//     console.log(slots);
//     console.log(slotPrice);
  
// }
  return (
    <>
    <h1 className="font-bold text-xl md:text-2xl">Slot Manage</h1>
             <div className=' justify-center items-center  w-full px-10'>
                <div className='flex justify-end'>
                <button onClick={()=>setModal(!modal)} className='text-base bg-blue-500 p-1 rounded-lg text-white mr-4'>Add Slots</button>
                <button className='text-base bg-blue-500 p-1 rounded-lg text-white '>Add Booking</button>
                </div>
             <SlotBookingTable/>
             </div>
            {modal && <AddSlotModal title={"Add Slot"} modal={modal} setModal={setModal} />}
      </>
  )
}

export default SlotManageContainer