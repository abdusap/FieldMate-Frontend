import React from 'react'

function HomeCard({path,head,body}) {

  return (
    <div className='flex md:w-1/3 flex-col  self-center px-10 gap-2 py-4 md:py-8'>
        <img className=' self-center' src={path} alt="logo" />
        <h1 className='font-semibold text-center text-lg'>{head}</h1>
        <p className='text-center font-thin'>{body}</p>
    </div>
  )
}

export default HomeCard