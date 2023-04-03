import React from 'react'
import TurfDetailsInVerification from './TurfDetailsInVerification'

function TurfVericationContainer() {
  return (
    <>
           <h1 className="font-bold text-xl md:text-2xl">Turf Verify</h1>
             <div className='flex justify-center items-center  w-full'>

              <div className=' border-black border  rounded-xl w-4/5 px-2 md:px-44 h-96 overflow-auto'>
                    <p className='text-sm md:text-lg font-semibold ml-2'>Pending Verification</p>
                   
                  <TurfDetailsInVerification name={'hakld'} email={'fkdj'} mobile={23894798} location={'dkf'} coordinates={'http://www.location.com'} id={'kfdfkdj243'} handleAccept={(id)=>console.log(id)} handleReject={(id)=>console.log(id)} />
                  <TurfDetailsInVerification name={'hakld'} email={'fkdj'} mobile={23894798} location={'dkf'} coordinates={'http://www.location.com'} id={'kfdfkdj243'} handleAccept={(id)=>console.log(id)} handleReject={(id)=>console.log(id)} />
                  <TurfDetailsInVerification name={'hakld'} email={'fkdj'} mobile={23894798} location={'dkf'} coordinates={'http://www.location.com'} id={'kfdfkdj243'} handleAccept={(id)=>console.log(id)} handleReject={(id)=>console.log(id)} />
                
    
                    
              </div>
              
             </div>
    </>
  )
}

export default TurfVericationContainer