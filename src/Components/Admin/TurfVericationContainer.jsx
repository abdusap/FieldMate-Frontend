import React, { useEffect,useState } from 'react'
import TurfDetailsInVerification from './TurfDetailsInVerification'
import { acceptTurfApi, allTurfDetailForVerifyApi } from '../../Helpers/AdminApi'


function TurfVericationContainer() {
  const [allTurf ,setAllturf]=useState([])
  // let allTurf
  useEffect(()=>{
    allTurfDetailForVerifyApi().then((res)=>{
      console.log(res.data.allTurf)
      setAllturf(res.data.allTurf)
      //  allTurf=res.data.allTurf
    })
  },[])
  const handleAccept=(id)=>{
   
    // const data=new FormData()
    //    data.append(id)
    // const data.id=id
    // console.log(data)
    acceptTurfApi(id).then((res)=>{

    })
console.log(id)
  }
  const handleReject=(id)=>{
console.log(id)
  }
  return (
    <>
           <h1 className="font-bold text-xl md:text-2xl">Turf Verify</h1>
             <div className='flex justify-center items-center  w-full'>

              <div className=' border-black border  rounded-xl w-4/5 px-2 md:px-44 h-96 overflow-auto'>
                    <p className='text-sm md:text-lg font-semibold ml-2'>Pending Verification</p>
                   { allTurf.map((data)=>{
                  return  <TurfDetailsInVerification name={data.name} email={data.email} mobile={data.mobile} location={"calicut"} coordinates={data.gioCoordinates} id={data._id} handleAccept={handleAccept} handleReject={handleReject}  verificationStatus={data.verificationStatus}/>

                   })

                    
                   }
                
    
                    
              </div>
              
             </div>
    </>
  )
}

export default TurfVericationContainer