import React from 'react'
import UserManageTable from './UserManageTable'


function UserManageContainer() {
  return (
    <>
<h1 className="font-bold text-xl md:text-2xl">User Manage</h1>
             <div className=' justify-center items-center  w-full px-10'>
                <div className='flex justify-end'>
                {/* <button onClick={()=>setModal(!modal)} className='text-base bg-blue-500 p-1 rounded-lg text-white mr-4'>Add Slots</button> */}
                {/* <button className='text-base bg-blue-500 p-1 rounded-lg text-white '>Add Booking</button> */}
                </div>
             <UserManageTable/>
             </div>
            {/* {modal && <AddSlotModal title={"Add Slot"} modal={modal} setModal={setModal} />} */}
    </>
  )
}

export default UserManageContainer