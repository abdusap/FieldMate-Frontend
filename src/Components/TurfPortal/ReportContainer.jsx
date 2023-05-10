import React, { useState } from 'react'
import SlotBookingTable from './SlotBookingTable'
import AddSlotModal from './AddSlotModal'
import SlotDetailsModal from './SlotDetailsModal'


function ReportContainer() {
//   const [modal,setModal]=useState(false)
//   const [detailsModal,setdetailsModal]=useState(false)
//   const [slotId,setSlotId]=useState('')


  return (
    <>
    <h1 className="font-bold text-xl md:text-2xl">Slot Manage</h1>
             <div className=' justify-center items-center  w-full px-10'>
                <div className='flex justify-end'>
                {/* <button onClick={()=>setModal(!modal)} className='text-base bg-blue-500 mb-2 p-1 rounded-lg text-white mr-4'>Add Slots</button> */}
                </div>
             <SlotBookingTable detailModal={detailsModal} setdetailsModal={setdetailsModal} setSlotId={setSlotId}/>
             </div>
            {modal && <AddSlotModal title={"Add Slot"} modal={modal} setModal={setModal} />}
            {detailsModal && <SlotDetailsModal modal={detailsModal} setModal={setdetailsModal} slotId={slotId} setSlotId={setSlotId}/>}
      </>
  )
}

export default ReportContainer