import React, { useEffect } from 'react'
import { profileDetailsApi } from '../../Helpers/UserApi'
import { useSelector } from 'react-redux'

function ProfileSection() {
 const {id}= useSelector((state)=>state.user)
  useEffect(()=>{
    profileDetailsApi(id).then((res)=>{
console.log(res)
    })
  },[])
  return (
    <div className='flex justify-center items-center'>
    <div className='md:w-2/4 w-3/4 bg-white flex mx-auto  flex-col md:flex-row md:px-8 md:py-5 px-4 py-4 my-8'>

<div className='md:w-1/2 flex flex-col justify-center items-center'>
  <p>Profile Image</p>
<div className=''>
  {/* <div></div> */}
  <img className='rounded-full w-28 h-28 mx-auto' src="https://res.cloudinary.com/dzmbmpreb/image/upload/v1682434483/FieldMate/Turf/lvs16h8xvpieyjpiazro.jpg" alt="" />
  <div>
    <input type="file" className='mt-2 mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5' />
  </div>
  <div className='flex justify-center'>
  {/* <button className='px-2 py-1 bg-blue-700 text-white rounded-lg'>Update</button> */}
  <button disabled type="button" class="text-white w-36 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center">
  <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
    updating...
</button>
  </div>
  
</div>
<div>
  <p className='font-semibold mt-1'>Wallet Balance <span>₹10</span></p>
</div>
</div>
<div className='md:w-1/2'>
        <div>
            <label for="first_name" class="block mb-2 mt-3 text-sm font-medium text-gray-900 ">Name</label>
            <input  type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5" placeholder="Name" />
        </div>
        <div>
            <label for="first_name" class="block mb-2 mt-3 text-sm font-medium text-gray-900 ">Email</label>
            <input readOnly  type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5" placeholder="Email" />
        </div>
        <div>
            <label for="first_name" class="block mb-2 mt-3 text-sm font-medium text-gray-900 ">Mobile</label>
            <input readOnly  type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5" placeholder="Mobile" />
        </div>
        <div className='flex justify-center my-3'>
          <button className='px-2 py-1 text-white w-24 bg-blue-700  rounded-lg'>Save</button>
        </div>
</div>
    </div>
    </div>
  )
}

export default ProfileSection