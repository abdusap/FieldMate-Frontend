import React from 'react'
import UserManageTable from './UserManageTable'


function UserManageContainer() {
  return (
    <>
<h1 className="font-bold text-xl md:text-2xl">User Manage</h1>
             <div className=' justify-center items-center  w-full px-10'>
                <div className='flex justify-end'>
                </div>
             <UserManageTable/>
             </div>
    </>
  )
}

export default UserManageContainer