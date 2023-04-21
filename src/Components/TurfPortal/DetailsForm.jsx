import React, { useEffect, useRef, useState } from 'react'
import Select from 'react-select';
import { getAllDetailsApi, turfDetailsApi } from '../../Helpers/TurfApi,';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'




function DetailsForm({amenityModal,setAmenityModal,rulesModal,setRulesModal,setAmenityData,setRulesData,updated,setUpdated}) {
  const turfId=useSelector((state)=>state.turf)
  console.log(turfId);
 
  const [turfData,setTurfData]=useState({})
  const [turfDetails,setTurfDetails]=useState({})
    const [sports,setSports]=useState([])
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [error, setError] = useState(false);
    const [image, setImage] = useState([]);
  useEffect(()=>{
    getAllDetailsApi(turfId.id).then((res)=>{
        
        const sport=res.data.allSports
        let convertedSports = sport.map(sport => {
          return {
            value: sport._id,
            label: sport.name
          };
        });
        setSports(convertedSports)
        setTurfData(res.data.details.turf[0])
        setTurfDetails(res.data.details.details)
        const sportsId=res.data.details.details.sports
        const matchedSports=convertedSports.filter(sports=>{
          return sportsId.includes(sports.value)
        })
        setSelectedOptions(matchedSports)
        console.log(res.data.details.details.amenities);
        setAmenityData(res.data.details.details.amenities)
        setRulesData(res.data.details.details.rules)
    })
  },[updated])

    const config = {
      headres: {
        "Content-Type": "multipart/form-data",
      },
    };

    const groundName=useRef()
    const website=useRef()

    const images=useRef()
    const onChangeHandler = (e)=>{
      e.preventDefault()
      if(!error){
        
        const formData=new FormData()
        formData.append('turfId',turfId.id)
        formData.append('groundName',groundName.current?.value)
        formData.append('website',website.current?.value)
        for (let i=0;i<image.length;i++){

          formData.append('image',image[i])
        }
        formData.append('sports',JSON.stringify(selectedOptions))
        console.log(selectedOptions)
        console.log(formData)
        turfDetailsApi(formData,config).then((res)=>{
          setUpdated(!updated)
          if(res.data.success){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Changes has been saved',
              showConfirmButton: false,
              timer: 1200
            })
          }
        })
      }
   
    }
   
 
  
      const handleMultiSelectChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
      };

 
      const handleImageChange = (e) => {
        
        const files = e.target.files;
      //  console.log(files);
      //   console.log(files.length);
        
        const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/;
      
        let allValid = true;
        const Images = [];
      
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          if (allowedExtensions.exec(file.name)) {
           Images.push(file);
          } else {
            allValid = false;
            break;
          }
        }
      
        if (!allValid) {
          setError(true);
        } else {
          setError(false);
          setImage(Images);
        }
        // console.log(Images);
        // console.log(error);
      };
       
  return (
    <>
     <div className=' border-black border  rounded-xl w-4/5 px-6  h-[28rem] overflow-auto'>
<form onSubmit={onChangeHandler}>
                <div className='md:flex'>
                
             <div className='md:w-1/2 flex-grow md:px-3'>
             <div>
            <label for="first_name" class="block mb-2 mt-3 text-sm font-medium text-gray-900 ">Email</label>
            <input readOnly value={turfData?.email} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5" placeholder="Email" />
        </div>
       
            
        <div>
            <label for="first_name" class="block mb-2 mt-3 text-sm font-medium text-gray-900 ">Mobile</label>
            <input readOnly  value={turfData?.mobile} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5" placeholder="Mobile" />
        </div>
        <div>
            <label for="first_name"  className="block mb-2 mt-3 text-sm font-medium text-gray-900 ">Gio-Coordinates</label>
            <input readOnly  value={turfData?.gioCoordinates}  type="text" id="first_name" name='gioCoordinates'  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5" placeholder="Coordinates" />
        </div>
        <div>
            <label for="first_name" class="block mb-2 mt-3 text-sm font-medium text-gray-900 ">Location</label>
            <input readOnly  value={turfData?.location} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5" placeholder="Location"/>
        </div>
       

        <div className=' pt-2 flex flex-wrap'>
          
        <div  onClick={()=>setAmenityModal(!amenityModal)} className="w-fit cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Amenities</div>
        <div  onClick={()=>setRulesModal(!rulesModal)} className="w-fit cursor-pointer focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Rules</div>

        </div>
      
      
       
   
             </div>
             <div className='md:w-1/2 flex-grow md:px-3'>
          <div>
            <label htmlFor="first_name" class="block mb-2 mt-3 text-sm font-medium text-gray-900 ">Ground Name</label>
            <input ref={groundName} value={turfDetails?.groundName} onChange={(e) => setTurfDetails({ ...turfDetails, groundName: e.target.value })} type="text" id="first_name" name='groundName'   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5" placeholder="Ground Name" required/>
        </div>
        <div>
            <label for="first_name" className="block mb-2 mt-3 text-sm font-medium text-gray-900 ">Website</label>
            <input ref={website} value={turfDetails?.website}   onChange={(e) => setTurfDetails({ ...turfDetails, website: e.target.value })} type="text" id="first_name" name='website'   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5" placeholder="Website" required/>
        </div>
             <div>
            <label for="first_name" className="block mb-2 mt-3 text-sm font-medium text-gray-900 ">Available Sports</label>
  
            <Select
  isMulti
  options={sports}
  value={selectedOptions}
  onChange={handleMultiSelectChange}
  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5'
/>
        </div>
      
        <div>
        <label className="block mb-2 mt-3 text-sm font-medium text-gray-900 " for="file_input">Upload file</label>
<input onChange={handleImageChange} ref={images} multiple name='image' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5" id="file_input" type="file"/>
{error &&
<p className="mx-3 text-red-400 text-sm">
                Only jpg | jpeg | png are allowed
              </p>
              }
        </div>
        
             
        <div>
        <label className="block mb-2 mt-3 text-sm font-medium text-gray-900 " for="file_input">Pictures</label>
    <div className='flex  md:flex-row flex-col'>
      {turfDetails?.image && turfDetails.image.map((name)=>
       <div  className='relative ml-2 '>
        <img className='w-32 h-20' src={name} alt="Pictures" />
        <p className='absolute top-0 right-2 text-xl font-bold text-red-700 cursor-pointer'>X</p>
      </div>
      )

        
}
{/* <div className='relative ml-2 '>
  <img className='w-32 h-20' src="/image/abc1.jpg" alt="Pictures" />
  <p className='absolute top-0 right-2  text-xl font-bold text-red-700 cursor-pointer'>X</p>
</div> */}

      </div>  
        </div>
             </div>
            



        
     
             </div>
                   <div className='flex flex-grow justify-center'>
                   <button type="submit" className="mt-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Save</button>

                    </div> 
             </form>
              </div>
    </>
  )
}

export default DetailsForm