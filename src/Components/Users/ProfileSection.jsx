import React, { useEffect, useState } from 'react'
import { profileDetailsApi, profileUpdateApi, profileimageApi } from '../../Helpers/UserApi'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

function ProfileSection() {
 const {id}= useSelector((state)=>state.user)
 const [details,setDetails]=useState({})
 const [name,setName]=useState('')
 const [update,setUpdate]=useState(true)
 const [image, setImage] = useState('');
 const [error,setError]= useState(false)
 const [loading,setLoading]=useState(false)
  useEffect(()=>{
    profileDetailsApi(id).then((res)=>{
setDetails(res.data.details)
setName(res.data.details.name)
    })
  },[update])


  const handleSave=(e)=>{
        e.preventDefault()
        const data={
          id:id,
          name:name
        }
        profileUpdateApi(data).then((res)=>{
          if(res.data.details){
            setUpdate(!update)
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your update has been saved',
              showConfirmButton: false,
              timer: 1200
            })
          }
        })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/;
    
    if (allowedExtensions.exec(file.name)) {
      setImage(file);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleImageUpdate=()=>{
    if(!error){
      console.log(image)
      setLoading(!loading)
      const formData=new FormData()
      formData.append('image',image)
      formData.append('id',id)
      profileimageApi(formData).then((res)=>{
        console.log(res);
        setDetails(res.data.updatedData)
        setLoading(false)
      })
    }
  }

  return (
    <div className='flex justify-center items-center'>
    <div className='md:w-2/4 w-3/4 bg-white flex mx-auto  flex-col md:flex-row md:px-8 md:py-5 px-4 py-4 my-8'>

<div className='md:w-1/2 flex flex-col justify-center items-center'>
  <p>Profile Image</p>
<div className=''>
  {details.image===undefined ?
    <img className='rounded-full w-28 h-28 mx-auto' src="/image/profile-image.png" alt="" />
    :
    <img className='rounded-full w-28 h-28 mx-auto' src={details.image} alt="" />
  }
  <div>
    <input onChange={handleImageChange}  type="file" className='mt-2 mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5' />
  </div>
  {error &&
<p className="mx-3 my-2 text-red-400 text-sm">
                Only jpg | jpeg | png are allowed
              </p>
              }
  <div className='flex justify-center'>
  {/* <button className='px-2 py-1 bg-blue-700 text-white rounded-lg' onClick={handleImageUpdate}>Update</button> */}
  {
  <button onClick={handleImageUpdate} type="button" class="text-white w-36 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center">
{loading?<>
  <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
    updating...
</>:
<>
Update
</>
}
</button>
}
  </div>
  
</div>
<div>
  <p className='font-semibold mt-2'>Wallet Balance <span>₹{details.wallet}</span></p>
</div>
</div>
<div className='md:w-1/2'>
  <form onSubmit={handleSave}>

        <div>
            <label for="first_name" class="block mb-2 mt-3 text-sm font-medium text-gray-900 ">Name</label> 
            <input value={name} onChange={(e)=>setName(e.target.value)}  type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5" placeholder="Name"  required/>
        </div>
        <div>
            <label for="first_name" class="block mb-2 mt-3 text-sm font-medium text-gray-900 ">Email</label>
            <input readOnly value={details.email}  type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5" placeholder="Email" />
        </div>
        <div>
            <label for="first_name" class="block mb-2 mt-3 text-sm font-medium text-gray-900 ">Mobile</label>
            <input readOnly value={details.mobile}  type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5" placeholder="Mobile" />
        </div>
        <div className='flex justify-center my-3'>
          <button type='submit' className='px-2 py-1 text-white w-24 bg-blue-700  rounded-lg'>Update</button>
        </div>
  </form>
</div>
    </div>
    </div>
  )
}

export default ProfileSection